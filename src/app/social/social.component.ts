import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../shared/firestore.service';
import { FirestoreMember } from '../shared/firestore-member.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent implements OnInit {
  private firestoreService = inject(FirestoreService);

  allMembers: any[] = [];
  filteredMembers: any[] = [];
  isLoading = true;

  // Filter Options
  residenceOptions: string[] = [];
  ageOptions: number[] = [];
  generationOptions: number[] = [];

  // Filters
  filters = {
    name: '',
    contact: '',
    email: '',
    residence: '',
    age: null as number | null,
    generation: null as number | null
  };

  ngOnInit(): void {
    this.firestoreService.getMembers().subscribe({
      next: (members) => {
        this.allMembers = members.map(m => ({
          ...m,
          age: this.calculateAge(m.birthDate)
        }));
        this.extractFilterOptions();
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching members for social directory', err);
        this.isLoading = false;
      }
    });
  }

  private extractFilterOptions(): void {
    // Unique Residences
    this.residenceOptions = Array.from(new Set(
      this.allMembers
        .map(m => m.residence)
        .filter(r => !!r)
    )).sort();

    // Unique Ages
    this.ageOptions = Array.from(new Set(
      this.allMembers
        .map(m => m.age)
        .filter(a => a !== null)
    )).sort((a, b) => a - b);

    // Unique Generations
    this.generationOptions = Array.from(new Set(
      this.allMembers
        .map(m => m.generation)
        .filter(g => g !== undefined && g !== null)
    )).sort((a, b) => a - b);
  }

  calculateAge(birthDate?: string): number | null {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    if (isNaN(birth.getTime())) return null;
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  applyFilters(): void {
    this.filteredMembers = this.allMembers.filter(m => {
      const nameMatch = !this.filters.name || m.name.toLowerCase().includes(this.filters.name.toLowerCase());
      const contactMatch = !this.filters.contact || (m.phone && m.phone.includes(this.filters.contact));
      const emailMatch = !this.filters.email || (m.email && m.email.toLowerCase().includes(this.filters.email.toLowerCase()));
      const residenceMatch = !this.filters.residence || m.residence === this.filters.residence;
      const ageMatch = this.filters.age === null || m.age === Number(this.filters.age);
      const generationMatch = this.filters.generation === null || m.generation === Number(this.filters.generation);

      return nameMatch && contactMatch && emailMatch && residenceMatch && ageMatch && generationMatch;
    });
  }

  resetFilters(): void {
    this.filters = {
      name: '',
      contact: '',
      email: '',
      residence: '',
      age: null,
      generation: null
    };
    this.applyFilters();
  }
}
