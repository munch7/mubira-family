import { Injectable, inject } from '@angular/core';
import { Member } from './member.model';
import { FAMILY_TREE_DATA } from '../tree/family-tree.data';
import { FirestoreService } from './firestore.service';
import { FirestoreMember } from './firestore-member.model';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private firestoreService = inject(FirestoreService);

  // Synchronous local get (deprecated or fallback)
  getTree(): Member {
    const treeData = structuredClone(FAMILY_TREE_DATA);
    this.initializeMember(treeData);
    return treeData;
  }

  // Async get from Firestore with dual display (Local + Firestore)
  getTree$(): Observable<Member[]> {
    console.log('🌳 TreeService.getTree$() called');
    return this.firestoreService.getMembers().pipe(
      tap(members => {
        console.log('🌳 Received members from FirestoreService:', members);
      }),
      map(members => {
        console.log('🌳 Building tree from members...');
        const roots: Member[] = [];

        // Build Firestore Tree
        if (members && members.length > 0) {
          console.log('🌳 Building Firestore tree from', members.length, 'members');
          try {
            const firestoreTree = this.buildTree(members);
            if (firestoreTree) {
              console.log('🌳 ✅ Firestore tree built successfully:', firestoreTree);
              roots.push(firestoreTree);
            } else {
              console.warn('🌳 ⚠️ buildTree returned null');
            }
          } catch (e) {
            console.error('🌳 ❌ Error building Firestore tree', e);
          }
        } else {
          console.warn('🌳 ⚠️ No members from Firestore');
          // Fallback to local tree if no Firebase data
          const localTree = this.getTree();
          if (localTree) {
            console.log('🌳 Using local tree as fallback');
            roots.push(localTree);
          }
        }

        console.log('🌳 Final roots array:', roots);
        console.log('🌳 Number of root trees:', roots.length);
        return roots;
      }),
      catchError(err => {
        console.error('🌳 ❌ Error fetching tree from Firestore', err);
        return of([this.getTree()]);
      }),
      shareReplay(1)
    );
  }

  private buildTree(docs: FirestoreMember[]): Member | null {
    console.log('🌳 buildTree() called with', docs.length, 'documents');
    console.log('🌳 Documents:', docs);

    const memberMap = new Map<string, Member>();

    // 1. Create Member objects
    console.log('🌳 Step 1: Creating Member objects...');
    docs.forEach(doc => {
      memberMap.set(doc.id, {
        id: doc.id,
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        occupation: doc.occupation,
        residence: doc.residence,
        birthDate: doc.birthDate,
        gender: doc.gender,
        relationshipStatus: doc.relationshipStatus,
        profilePictureUrl: doc.profilePictureUrl,
        bio: doc.bio,
        generation: doc.generation,
        children: [],
        spouse: [],
        showChildren: false,
        showSpouse: false
      });
    });
    console.log('🌳 Created', memberMap.size, 'member objects');

    const docMap = new Map<string, FirestoreMember>();
    docs.forEach(doc => docMap.set(doc.id, doc));

    // 2. Link relationships
    console.log('🌳 Step 2: Linking relationships...');
    docs.forEach(doc => {
      const member = memberMap.get(doc.id);
      if (!member) return;

      // First, link spouses
      if (doc.spouseIds) {
        doc.spouseIds.forEach(spouseId => {
          const spouse = memberMap.get(spouseId);
          if (spouse && !member.spouse?.some(s => s.id === spouseId)) {
            member.spouse?.push(spouse);
          }
        });
      }

      // Then, link children
      if (doc.childrenIds) {
        doc.childrenIds.forEach(childId => {
          const child = memberMap.get(childId);
          if (!child) return;

          const childDoc = docMap.get(childId);
          const otherParentId = childDoc?.parentIds?.find(pId => pId !== doc.id);

          if (otherParentId) {
            const spouseObj = member.spouse?.find(s => s.id === otherParentId);
            if (spouseObj) {
              if (!spouseObj.children) spouseObj.children = [];
              if (!spouseObj.children.some(c => c.id === childId)) {
                spouseObj.children.push(child);
              }
              return;
            }
          }

          if (!member.children?.some(c => c.id === childId)) {
            member.children?.push(child);
          }
        });
      }
    });
    console.log('🌳 Relationships linked');

    // 3. Find Root
    console.log('🌳 Step 3: Finding root member...');

    // Try to find by name first
    const namedRoot = docs.find(d => d.name.toUpperCase().includes('MUBIRA GITUNGO'));
    if (namedRoot) {
      console.log('🌳 ✅ Found root by name:', namedRoot.name);
      const root = memberMap.get(namedRoot.id);
      if (root) {
        this.initializeMember(root);
        return root;
      }
    }
    console.log('🌳 No member found with name containing "MUBIRA GITUNGO"');

    // Try to find by generation
    const membersWithGeneration = docs.filter(d => d.generation !== undefined && d.generation !== null);
    console.log('🌳 Members with generation data:', membersWithGeneration.length);

    if (membersWithGeneration.length > 0) {
      const minGen = Math.min(...membersWithGeneration.map(d => d.generation!));
      console.log('🌳 Minimum generation found:', minGen);
      const rootDoc = membersWithGeneration.find(d => d.generation === minGen);

      if (rootDoc) {
        console.log('🌳 ✅ Found root by generation:', rootDoc.name, '(gen', rootDoc.generation, ')');
        const root = memberMap.get(rootDoc.id);
        if (root) {
          this.initializeMember(root);
          return root;
        }
      }
    }

    // Fallback: find member without parents
    console.log('🌳 Trying fallback: finding member without parents...');
    const memberWithoutParents = docs.find(d => !d.parentIds || d.parentIds.length === 0);
    if (memberWithoutParents) {
      console.log('🌳 ✅ Found root without parents:', memberWithoutParents.name);
      const root = memberMap.get(memberWithoutParents.id);
      if (root) {
        this.initializeMember(root);
        return root;
      }
    }

    // Last resort: return first member
    if (docs.length > 0) {
      console.warn('🌳 ⚠️ No clear root found, using first member:', docs[0].name);
      const root = memberMap.get(docs[0].id);
      if (root) {
        this.initializeMember(root);
        return root;
      }
    }

    console.error('🌳 ❌ Could not find any root member!');
    return null;
  }

  private initializeMember(member: Member, visited = new Set<string>()): void {
    const identifier = member.id || member.name;
    if (visited.has(identifier)) return;
    visited.add(identifier);

    if (member.showChildren === undefined) member.showChildren = false;
    if (member.showSpouse === undefined) member.showSpouse = false;
    if (member.children === undefined) member.children = [];
    if (member.spouse === undefined) member.spouse = [];

    if (member.children) {
      member.children.forEach(child => this.initializeMember(child, visited));
    }
    if (member.spouse) {
      member.spouse.forEach(spouse => this.initializeMember(spouse, visited));
    }
  }
}
