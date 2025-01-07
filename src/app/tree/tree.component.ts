import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {

  isDropdownOpen: { [key: string]: boolean } = {};

  toggleDropdown(key: string): void {
    this.isDropdownOpen[key] = !this.isDropdownOpen[key];
  }

  // @Input() familyTree: any[] = [];

  // toggleDropdown(member: any): void {
  //   member.expanded = !member.expanded;
  // }
  
}
