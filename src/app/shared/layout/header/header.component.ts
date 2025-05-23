import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/store/cart/cart.reducer';
import { selectCartItems } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartCount$: Observable<number>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.cartCount$ = this.store
      .select(selectCartItems)
      .pipe(map((items) => items.length));
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
