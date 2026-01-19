import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Member } from '../../shared/member.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  @Input() members: Member[] | undefined = [];
  @Output() viewMember = new EventEmitter<Member>();

  toggleNode(member: Member): void {
    member.showChildren = !member.showChildren;
  }

  viewDetails(member: Member): void {
    this.viewMember.emit(member);
  }

  isIncomplete(member: Member): boolean {
    // A member is "incomplete" if they have only a name and no detailed info
    return !member.email && !member.phone && !member.occupation &&
      !member.residence && !member.birthDate && !member.bio;
  }
}
