import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeService } from '../shared/tree.service';
import { Member } from '../shared/member.model';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent, MemberDetailComponent, MemberFormComponent],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent implements OnInit, OnDestroy {
  familyTree: Member[] = [];
  isLoading = true;

  selectedMember?: Member;
  showDetailModal = false;
  showFormModal = false;
  memberToEdit?: Member;
  initialFormData?: { parentId?: string; spouseOfId?: string };

  private destroy$ = new Subject<void>();

  constructor(
    private familyTreeService: TreeService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.familyTreeService.getTree$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (roots) => {
          this.familyTree = roots;
          this.isLoading = false;
          this.cdr.markForCheck(); // Ensure view updates after async data load
        },
        error: (err) => {
          console.error('Failed to load tree', err);
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  expandAll(): void {
    if (!this.familyTree.length) return;
    const visited = new Set<string>();
    this.familyTree.forEach(member => this.setExpandState(member, true, visited));
  }

  collapseAll(): void {
    if (!this.familyTree.length) return;
    const visited = new Set<string>();
    this.familyTree.forEach(member => this.setExpandState(member, false, visited));
  }

  filterTree(text: string): void {
    if (!this.familyTree.length) return;

    if (!text) {
      this.resetSearch(this.familyTree);
      return;
    }

    const lowerText = text.toLowerCase();
    const visited = new Set<string>();
    this.familyTree.forEach(member => this.filterMember(member, lowerText, visited));
  }

  private filterMember(member: Member, text: string, visited: Set<string>): boolean {
    const identifier = member.id || member.name;
    if (visited.has(identifier)) return member.isVisible || false;
    visited.add(identifier);

    const isMatch = member.name.toLowerCase().includes(text);
    member.isHighlighted = isMatch;

    let hasVisibleDescendant = false;

    if (member.children) {
      for (const child of member.children) {
        if (this.filterMember(child, text, visited)) {
          hasVisibleDescendant = true;
        }
      }
    }

    if (member.spouse) {
      for (const spouse of member.spouse) {
        if (this.filterMember(spouse, text, visited)) {
          hasVisibleDescendant = true;
        }
      }
    }

    const isVisible = isMatch || hasVisibleDescendant;
    member.isVisible = isVisible;

    if (hasVisibleDescendant) {
      member.showChildren = true;
    } else if (!isVisible) {
      member.showChildren = false;
    }

    return isVisible;
  }

  private resetSearch(members: Member[]): void {
    const stack = [...members];
    const visited = new Set<string>();

    while (stack.length > 0) {
      const member = stack.pop();
      if (!member) continue;

      const identifier = member.id || member.name;
      if (visited.has(identifier)) continue;
      visited.add(identifier);

      member.isVisible = true;
      member.isHighlighted = false;

      if (member.children) stack.push(...member.children);
      if (member.spouse) stack.push(...member.spouse);
    }
  }

  private setExpandState(member: Member, expanded: boolean, visited: Set<string>): void {
    const identifier = member.id || member.name;
    if (visited.has(identifier)) return;
    visited.add(identifier);

    member.showChildren = expanded;
    if (member.children) {
      member.children.forEach(child => this.setExpandState(child, expanded, visited));
    }
    if (member.spouse) {
      member.spouse.forEach(spouse => this.setExpandState(spouse, expanded, visited));
    }
  }

  onViewMember(member: Member): void {
    this.selectedMember = member;
    this.showDetailModal = true;
    this.cdr.markForCheck();
  }

  closeDetail(): void {
    this.showDetailModal = false;
    this.selectedMember = undefined;
    this.cdr.markForCheck();
  }

  onEditMember(member: Member): void {
    this.showDetailModal = false;
    this.memberToEdit = member;
    this.showFormModal = true;
    this.cdr.markForCheck();
  }

  onAddMember(): void {
    this.memberToEdit = undefined;
    this.initialFormData = undefined;
    this.showFormModal = true;
    this.cdr.markForCheck();
  }

  onAddChildRef(member: Member): void {
    this.showDetailModal = false;
    this.memberToEdit = undefined;
    this.initialFormData = { parentId: member.id };
    this.showFormModal = true;
    this.cdr.markForCheck();
  }

  onAddSpouseRef(member: Member): void {
    this.showDetailModal = false;
    this.memberToEdit = undefined;
    this.initialFormData = { spouseOfId: member.id };
    this.showFormModal = true;
    this.cdr.markForCheck();
  }

  closeForm(): void {
    this.showFormModal = false;
    this.memberToEdit = undefined;
    this.initialFormData = undefined;
    this.cdr.markForCheck();
  }

  onSaved(): void {
    // Refresh the tree
    this.isLoading = true;
    this.cdr.markForCheck();
    this.familyTreeService.getTree$().subscribe({
      next: (roots) => {
        this.familyTree = roots;
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
}
