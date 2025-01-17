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

  constructor(private familyTreeService: TreeService) {}

  ngOnInit(): void {
    const tree = this.familyTreeService.getTree();
    this.familyTree = [tree];
      console.log('Members:', this.familyTree);
  }
  

}
