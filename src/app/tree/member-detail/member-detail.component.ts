import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from '../../shared/member.model';

@Component({
    selector: 'app-member-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './member-detail.component.html',
    styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent {
    @Input({ required: true }) member!: Member;
    @Output() close = new EventEmitter<void>();
    @Output() edit = new EventEmitter<Member>();
    @Output() addChild = new EventEmitter<Member>();
    @Output() addSpouse = new EventEmitter<Member>();
}
