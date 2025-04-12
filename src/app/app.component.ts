import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchQuery = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/'], { queryParams: { q: this.searchQuery } });
  }}
