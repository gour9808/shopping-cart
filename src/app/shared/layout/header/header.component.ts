import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search = '';

  constructor(private router: Router) {}

  onSearch() {
    console.log(this.search);
    
    localStorage.setItem('searchTerm', this.search);
    this.router.navigate(['/products']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
