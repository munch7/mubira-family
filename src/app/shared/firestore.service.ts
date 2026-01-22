import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc, arrayUnion } from '@angular/fire/firestore';
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
        return from(deleteDoc(memberDoc)).pipe(
            tap(() => {
                console.log('🔥 ✅ Member deleted successfully:', id);
            })
        );
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
