import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeFromCart } from 'src/app/store/cart/cart.action';
import { Product } from 'src/app/store/cart/cart.model';
import { selectCartItems, selectCartTotal } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cart$: Observable<Product[]> = this.store.select(selectCartItems);
  total$: Observable<number> = this.store.select(selectCartTotal);

  constructor(private store: Store) {}

  remove(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }
}

