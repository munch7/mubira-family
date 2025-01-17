import { Component, Input } from '@angular/core';
import { Member } from '../../shared/member.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let member of members">
        <span>{{ member.name }}</span>
        <div *ngIf="member.spouse?.length">
          <strong>Spouse(s):</strong>
          <ul>
            <li *ngFor="let spouse of member.spouse">
              <span>{{ spouse.name }}</span>
            </li>
          </ul>
        </div>
        <div *ngIf="member.children?.length">
          <strong>Children:</strong>
          <app-tree-node [members]="member.children ??[]"></app-tree-node>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./tree-node.component.css'],
})

export class TreeNodeComponent {
  @Input() members: Member[] | undefined = [];

  ngOnInit() {
    console.log('Members:', this.members);
  }
}
