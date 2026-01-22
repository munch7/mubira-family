import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeService } from '../shared/tree.service';
import { Member } from '../shared/member.model';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, FormsModule, TreeNodeComponent, MemberDetailComponent, MemberFormComponent],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent implements OnInit, OnDestroy {
  familyTree: Member[] = [];
  isLoading = true;
  searchTerm: string = '';
  showToTopButton: boolean = false;

  selectedMember?: Member;
  showDetailModal = false;
  showFormModal = false;
  memberToEdit?: Member;
  initialFormData?: { parentId?: string; spouseOfId?: string };

  searchResults: { member: Member; parents: string; spouses: string }[] = [];
  allMembers: Member[] = [];

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
          this.allMembers = this.flattenTree(roots);
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
      this.searchResults = [];
      return;
    }

    const lowerText = text.toLowerCase();

    // Detailed search results
    this.searchResults = this.allMembers
      .filter(m => m.name.toLowerCase().includes(lowerText))
      .map(m => ({
        member: m,
        parents: m.parents?.map(p => p.name).join(', ') || 'None',
        spouses: m.spouse?.map(s => s.name).join(', ') || 'None'
      }));

    const visited = new Set<string>();
    this.familyTree.forEach(member => this.filterMember(member, lowerText, visited));
  }

  private flattenTree(roots: Member[]): Member[] {
    const flat: Member[] = [];
    const visited = new Set<string>();

    // Recursive flatten to ensure we catch everything in order if needed
    const traverse = (m: Member) => {
      const id = m.id || m.name;
      if (visited.has(id)) return;
      visited.add(id);
      flat.push(m);
      if (m.children) m.children.forEach(c => traverse(c));
      if (m.spouse) m.spouse.forEach(s => traverse(s));
    };

    roots.forEach(r => traverse(r));
    return flat;
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

  onSearch(): void {
    if (this.searchTerm.trim().length === 0) {
      this.searchResults = [];
      // Optionally reset tree highlights if needed
      return;
    }

    const text = this.searchTerm.toLowerCase();
    this.searchResults = this.allMembers
      .map(m => {
        const parents = m.parents?.map(p => p.name).join(', ') || 'None';
        const spouses = m.spouse?.map(s => s.name).join(', ') || 'None';
        return { member: m, parents, spouses };
      })
      .filter(res => res.member.name.toLowerCase().includes(text));

    this.cdr.markForCheck();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchResults = [];
    this.cdr.markForCheck();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const shouldShow = offset > 400;

    if (this.showToTopButton !== shouldShow) {
      this.showToTopButton = shouldShow;
      this.cdr.markForCheck();
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

  onAddSpouse(): void {
    this.memberToEdit = undefined;
    this.initialFormData = undefined;
    // We'll update member-form to show "Spouse of" even when adding from header
    this.showFormModal = true;
    this.cdr.markForCheck();
  }

  onDeleteMember(member: Member): void {
    if (!member.id) return;

    if (confirm(`Are you sure you want to delete ${member.name}? This will also clean up all family relationships.`)) {
      this.isLoading = true;
      this.showDetailModal = false;
      this.cdr.markForCheck();

      this.familyTreeService.deleteMember(member.id).subscribe({
        next: () => {
          this.onSaved(); // Re-use onSaved to refresh tree
        },
        error: (err) => {
          console.error('Delete failed', err);
          this.isLoading = false;
          this.cdr.markForCheck();
          alert('Failed to delete member. Please try again.');
        }
      });
    }
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
        this.allMembers = this.flattenTree(roots);
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  selectResult(member: Member): void {
    this.searchResults = [];
    this.expandPathToMember(member);

    // Highlight and scroll
    member.isHighlighted = true;
    this.cdr.markForCheck();

    setTimeout(() => {
      const element = document.getElementById('member-' + (member.id || member.name));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Brief pulse effect via temporary class if needed, or just let highlighted handle it
        setTimeout(() => {
          // Keep it highlighted or pulse? Let's stay with highlighted for now
        }, 2000);
      }
    }, 100);
  }

  private expandPathToMember(member: Member): void {
    const visited = new Set<string>();
    const expandUp = (m: Member) => {
      const id = m.id || m.name;
      if (visited.has(id)) return;
      visited.add(id);

      if (m.parents) {
        m.parents.forEach(parent => {
          parent.showChildren = true;
          expandUp(parent);
        });
      }
    };

    expandUp(member);
    this.cdr.markForCheck();
  }
}
