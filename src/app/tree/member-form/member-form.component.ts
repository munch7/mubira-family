import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { Member } from '../../shared/member.model';
import { FirestoreService } from '../../shared/firestore.service';
import { forkJoin, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-member-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './member-form.component.html',
    styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
    @Input() member?: Member;
    @Input() initialData?: { parentId?: string; spouseOfId?: string };
    @Output() close = new EventEmitter<void>();
    @Output() saved = new EventEmitter<void>();

    memberForm!: FormGroup;
    isEdit = false;
    isLoading = false;
    members: any[] = [];
    selectedParentSpouses: any[] = [];

    // Search/Autocomplete State
    memberSearch = '';
    motherSearch = '';
    nameSearch = '';
    showNameSuggestions = false;
    showmemberSuggestions = false;
    showMotherSuggestions = false;

    filteredNames: any[] = [];
    filteredmembers: any[] = [];
    filteredMothers: any[] = [];

    isDuplicateName = false;

    constructor(
        private fb: FormBuilder,
        private firestoreService: FirestoreService
    ) { }

    ngOnInit(): void {
        this.isEdit = !!this.member;
        this.initForm();
        this.loadMembers();
        this.onParentChange();
        this.setupSearchListeners();

        // If initial parent is provided, trigger parent change logic manually
        if (this.initialData?.parentId) {
            setTimeout(() => {
                const parent = this.members.find(m => m.id === this.initialData?.parentId);
                if (parent) {
                    this.memberSearch = parent.name;
                    this.memberForm.get('parentId')?.setValue(parent.id);
                }
            }, 500); // Wait for members to load
        }
        if (this.initialData?.spouseOfId) {
            // Handle initial spouse if needed (currently not in autocomplete yet)
        }
    }

    private loadMembers(): void {
        this.firestoreService.getMembers().subscribe({
            next: (data) => {
                this.members = data.filter(m => m.id !== this.member?.id);
                this.members.sort((a, b) => a.name.localeCompare(b.name));
                this.filteredNames = [...this.members];
                this.filteredmembers = [...this.members];
            }
        });
    }

    private setupSearchListeners(): void {
        // Name duplicate check
        this.memberForm.get('name')?.valueChanges.subscribe(val => {
            if (!val) {
                this.filteredNames = [];
                this.isDuplicateName = false;
                return;
            }
            const search = val.toLowerCase();
            this.filteredNames = this.members.filter(m => m.name.toLowerCase().includes(search));
            this.isDuplicateName = this.members.some(m => m.name.toLowerCase() === search);
        });
    }

    onNameFocus(): void {
        this.showNameSuggestions = true;
    }

    onNameBlur(): void {
        setTimeout(() => this.showNameSuggestions = false, 200);
    }

    selectNameSuggestion(name: string): void {
        this.memberForm.get('name')?.setValue(name);
        this.showNameSuggestions = false;
    }

    // member Autocomplete
    onmemberSearch(event: any): void {
        const val = event.target.value;
        this.memberSearch = val;
        this.showmemberSuggestions = true;
        if (!val) {
            this.filteredmembers = this.members;
            this.memberForm.get('parentId')?.setValue('');
            return;
        }
        const search = val.toLowerCase();
        this.filteredmembers = this.members.filter(m => m.name.toLowerCase().includes(search));
    }

    selectmember(m: any): void {
        this.memberSearch = m.name;
        this.memberForm.get('parentId')?.setValue(m.id);
        this.showmemberSuggestions = false;
    }

    // Mother Autocomplete
    onMotherSearch(event: any): void {
        const val = event.target.value;
        this.motherSearch = val;
        this.showMotherSuggestions = true;

        const source = this.selectedParentSpouses.length > 0 ? this.selectedParentSpouses : this.members;

        if (!val) {
            this.filteredMothers = source;
            this.memberForm.get('otherParentId')?.setValue('');
            return;
        }
        const search = val.toLowerCase();
        this.filteredMothers = source.filter(m => m.name.toLowerCase().includes(search));
    }

    selectMother(m: any): void {
        this.motherSearch = m.name;
        this.memberForm.get('otherParentId')?.setValue(m.id);
        this.showMotherSuggestions = false;
    }

    private onParentChange(): void {
        this.memberForm.get('parentId')?.valueChanges.subscribe(parentId => {
            if (parentId) {
                const parent = this.members.find(m => m.id === parentId);
                if (parent && parent.spouseIds) {
                    this.selectedParentSpouses = this.members.filter(m => parent.spouseIds.includes(m.id));
                } else {
                    this.selectedParentSpouses = [];
                }
            } else {
                this.selectedParentSpouses = [];
            }
            // Reset mother search when member changes
            this.motherSearch = '';
            this.memberForm.get('otherParentId')?.setValue('');
            this.filteredMothers = this.selectedParentSpouses;
        });
    }

    private initForm(): void {
        this.memberForm = this.fb.group({
            name: [this.member?.name || '', Validators.required],
            email: [this.member?.email || ''],
            phone: [this.member?.phone || ''],
            occupation: [this.member?.occupation || ''],
            residence: [this.member?.residence || ''],
            birthDate: [this.member?.birthDate || ''],
            gender: [this.member?.gender || ''],
            relationshipStatus: [this.member?.relationshipStatus || ''],
            parentId: [this.initialData?.parentId || ''],
            otherParentId: [''],
            spouseOfId: [this.initialData?.spouseOfId || '']
        });
    }

    onSubmit(): void {
        if (this.memberForm.invalid) return;

        this.isLoading = true;
        const formData = this.memberForm.value;
        const { parentId, spouseOfId, otherParentId, ...memberData } = formData;

        if (this.isEdit && this.member?.id) {
            this.firestoreService.updateMember(this.member.id, memberData).subscribe({
                next: () => {
                    this.finalizeSubmission();
                },
                error: (err) => {
                    console.error('Error updating member', err);
                    this.isLoading = false;
                }
            });
        } else {
            const newMember: any = { ...memberData };
            const initialParentIds: string[] = [];
            if (parentId) initialParentIds.push(parentId);
            if (otherParentId) initialParentIds.push(otherParentId);
            if (initialParentIds.length > 0) newMember.parentIds = initialParentIds;

            if (spouseOfId) newMember.spouseIds = [spouseOfId];

            this.firestoreService.addMember(newMember).subscribe({
                next: (mainMemberId) => {
                    // Update initial parents
                    initialParentIds.forEach(pId => {
                        this.firestoreService.addChildToParent(pId, mainMemberId).subscribe();
                    });

                    if (spouseOfId) {
                        this.firestoreService.addSpouse(spouseOfId, mainMemberId).subscribe();
                        this.firestoreService.addSpouse(mainMemberId, spouseOfId).subscribe();
                    }

                    this.finalizeSubmission();
                },
                error: (err) => {
                    console.error('Error adding member', err);
                    this.isLoading = false;
                }
            });
        }
    }

    private processBulkRelationships(mainMemberId: string, spousesData: any[]): void {
        const spouseObservables = spousesData.map(sData => {
            // Check if spouse already exists
            const existingSpouse = this.members.find(m =>
                m.name.toLowerCase() === sData.name.toLowerCase() &&
                m.spouseIds?.includes(mainMemberId)
            );

            const spouseOperation = existingSpouse
                ? of(existingSpouse.id)
                : this.firestoreService.addMember({ name: sData.name, spouseIds: [mainMemberId] });

            return spouseOperation.pipe(
                switchMap(spouseId => {
                    // Link main member to this spouse (if not already linked)
                    if (!existingSpouse) {
                        this.firestoreService.addSpouse(mainMemberId, spouseId).subscribe();
                    }

                    if (sData.children && sData.children.length > 0) {
                        const childObservables = sData.children.map((cData: any) => {
                            // Check if child already exists with same name and parents
                            const existingChild = this.members.find(m =>
                                m.name.toLowerCase() === cData.name.toLowerCase() &&
                                m.parentIds?.includes(mainMemberId) &&
                                m.parentIds?.includes(spouseId)
                            );

                            if (existingChild) {
                                // Child already exists, just return the ID
                                return of(existingChild.id);
                            }

                            // Create new child
                            const newChild = {
                                name: cData.name,
                                parentIds: [mainMemberId, spouseId]
                            };
                            return this.firestoreService.addMember(newChild).pipe(
                                tap(childId => {
                                    this.firestoreService.addChildToParent(mainMemberId, childId).subscribe();
                                    this.firestoreService.addChildToParent(spouseId, childId).subscribe();
                                })
                            );
                        });
                        return forkJoin(childObservables);
                    }
                    return of(null);
                })
            );
        });

        forkJoin(spouseObservables).subscribe({
            next: () => this.finalizeSubmission(),
            error: (err) => {
                console.error('Error processing bulk relationships', err);
                this.finalizeSubmission();
            }
        });
    }

    private finalizeSubmission(): void {
        this.isLoading = false;
        this.saved.emit();
        this.close.emit();
    }
}
