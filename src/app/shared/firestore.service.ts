import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc, arrayUnion, arrayRemove, getDoc } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Member } from './member.model';
import { FirestoreMember } from './firestore-member.model';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    private firestore: Firestore = inject(Firestore);
    private readonly membersCollectionName = 'members';

    constructor() {
        console.log('🔥 FirestoreService initialized');
        console.log('🔥 Firestore instance:', this.firestore);
        console.log('🔥 Collection name:', this.membersCollectionName);
    }

    // Fetch all members from a collection. 
    getMembers(): Observable<FirestoreMember[]> {
        console.log('🔥 getMembers() called - Fetching from collection:', this.membersCollectionName);
        const membersCollection = collection(this.firestore, this.membersCollectionName);
        console.log('🔥 Collection reference created:', membersCollection);

        return (collectionData(membersCollection, { idField: 'id' }) as Observable<FirestoreMember[]>).pipe(
            tap(members => {
                console.log('🔥 ✅ Data received from Firestore:', members);
                console.log('🔥 ✅ Number of members:', members.length);
                if (members.length > 0) {
                    console.log('🔥 ✅ First member:', members[0]);
                } else {
                    console.warn('🔥 ⚠️ No members found in Firestore collection');
                }
            }),
            catchError(err => {
                console.error('🔥 ❌ Error fetching members from Firestore:', err);
                console.error('🔥 ❌ Error details:', {
                    message: err.message,
                    code: err.code,
                    stack: err.stack
                });
                return of([]);
            })
        );
    }

    addMember(member: Partial<FirestoreMember>): Observable<string> {
        console.log('🔥 addMember() called with data:', member);
        const membersCollection = collection(this.firestore, this.membersCollectionName);
        return from(addDoc(membersCollection, member)).pipe(
            tap(docRef => {
                console.log('🔥 ✅ Member added successfully with ID:', docRef.id);
            }),
            map(docRef => docRef.id),
            catchError(err => {
                console.error('🔥 ❌ Error adding member:', err);
                throw err;
            })
        );
    }

    updateMember(id: string, member: Partial<FirestoreMember>): Observable<void> {
        console.log('🔥 updateMember() called for ID:', id, 'with data:', member);
        const memberDoc = doc(this.firestore, `${this.membersCollectionName}/${id}`);
        return from(updateDoc(memberDoc, { ...member })).pipe(
            tap(() => {
                console.log('🔥 ✅ Member updated successfully:', id);
            }),
            catchError(err => {
                console.error('🔥 ❌ Error updating member:', err);
                throw err;
            })
        );
    }

    deleteMember(id: string): Observable<void> {
        console.log('🔥 deleteMember() called for ID:', id);
        const memberDoc = doc(this.firestore, `${this.membersCollectionName}/${id}`);

        // First fetch the member to get relationship IDs for cleanup
        return from(getDoc(memberDoc)).pipe(
            switchMap(snapshot => {
                if (!snapshot.exists()) return of(undefined);
                const data = snapshot.data() as FirestoreMember;

                const cleanupOps: Observable<any>[] = [];

                // 1. Remove from parents' childrenIds
                if (data.parentIds) {
                    data.parentIds.forEach(pId => {
                        cleanupOps.push(this.removeChildFromParent(pId, id));
                    });
                }

                // 2. Remove from children's parentIds
                if (data.childrenIds) {
                    data.childrenIds.forEach(cId => {
                        cleanupOps.push(this.removeParentFromChild(cId, id));
                    });
                }

                // 3. Remove from spouses' spouseIds
                if (data.spouseIds) {
                    data.spouseIds.forEach(sId => {
                        cleanupOps.push(this.removeSpouse(sId, id));
                    });
                }

                if (cleanupOps.length === 0) return of(undefined);
                return forkJoin(cleanupOps);
            }),
            switchMap(() => from(deleteDoc(memberDoc))),
            tap(() => {
                console.log('🔥 ✅ Member deleted successfully and relationships cleaned up:', id);
            }),
            map(() => undefined),
            catchError(err => {
                console.error('🔥 ❌ Error deleting member:', err);
                throw err;
            })
        );
    }

    removeChildFromParent(parentId: string, childId: string): Observable<void> {
        console.log('🔥 removeChildFromParent() - Parent:', parentId, 'Child:', childId);
        const parentDoc = doc(this.firestore, `${this.membersCollectionName}/${parentId}`);
        return from(updateDoc(parentDoc, {
            childrenIds: arrayRemove(childId)
        })).pipe(map(() => undefined));
    }

    removeParentFromChild(childId: string, parentId: string): Observable<void> {
        console.log('🔥 removeParentFromChild() - Child:', childId, 'Parent:', parentId);
        const childDoc = doc(this.firestore, `${this.membersCollectionName}/${childId}`);
        return from(updateDoc(childDoc, {
            parentIds: arrayRemove(parentId)
        })).pipe(map(() => undefined));
    }

    removeSpouse(memberId: string, spouseId: string): Observable<void> {
        console.log('🔥 removeSpouse() - Member:', memberId, 'Spouse:', spouseId);
        const memberDoc = doc(this.firestore, `${this.membersCollectionName}/${memberId}`);
        return from(updateDoc(memberDoc, {
            spouseIds: arrayRemove(spouseId)
        })).pipe(map(() => undefined));
    }

    addChildToParent(parentId: string, childId: string): Observable<void> {
        console.log('🔥 addChildToParent() - Parent:', parentId, 'Child:', childId);
        const parentDoc = doc(this.firestore, `${this.membersCollectionName}/${parentId}`);
        return from(updateDoc(parentDoc, {
            childrenIds: arrayUnion(childId)
        })).pipe(
            tap(() => {
                console.log('🔥 ✅ Child added to parent successfully');
            })
        );
    }

    addSpouse(memberId: string, spouseId: string): Observable<void> {
        console.log('🔥 addSpouse() - Member:', memberId, 'Spouse:', spouseId);
        const memberDoc = doc(this.firestore, `${this.membersCollectionName}/${memberId}`);
        return from(updateDoc(memberDoc, {
            spouseIds: arrayUnion(spouseId)
        })).pipe(
            tap(() => {
                console.log('🔥 ✅ Spouse added successfully');
            })
        );
    }

    // Fetch a single tree document
    getTreeDocument(): Observable<Member | null> {
        console.log('🔥 getTreeDocument() called');
        const treeDoc = doc(this.firestore, 'trees/mubiraFamily');
        return docData(treeDoc) as Observable<Member>;
    }
}
