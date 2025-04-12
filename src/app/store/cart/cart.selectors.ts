import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from './cart.model';
export interface CartState {
  cart: Product[];
}

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.cart
);

export const selectCartTotal = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total + item.price, 0)
);