import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDropdownOpen: { [key: string]: boolean } = {};

  toggleDropdown(key: string): void {
    this.isDropdownOpen[key] = !this.isDropdownOpen[key];
  }
}
