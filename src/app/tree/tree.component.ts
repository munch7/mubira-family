import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeService } from '../shared/tree.service';
import { Member } from '../shared/member.model';
import { TreeNodeComponent } from './tree-node/tree-node.component';

// interface FamilyNode {
//   name: string;
//   spouse?: FamilyNode[];
//   children?: FamilyNode[];
// }

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [ CommonModule, TreeNodeComponent],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})

export class TreeComponent implements OnInit{
  familyTree: Member[] = [];
  member: Member[] = [];
  generation: number = 1;

  constructor(private familyTreeService: TreeService) {}

  ngOnInit(): void {
    const tree = this.familyTreeService.getTree();
    this.familyTree = [tree];
      console.log('Members:', this.familyTree);
  }
  
  toggleNode(member: Member): void {
    member.showChildren = !member.showChildren;
    member.showSpouse = !member.showSpouse; 
    if (member.children) {
      member.children.forEach(child => child.showChildren = false); // Collapse all children initially if toggling parent
    }
    if (member.spouse) {
      member.spouse.forEach(child => child.showSpouse = false); // Collapse all spouse initially if toggling parent
    }
  }
  
}
