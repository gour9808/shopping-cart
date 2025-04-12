import { createSelector } from '@ngrx/store';
import { AppState, CartState } from './cart.reducer';

export const selectCartState = (state: AppState): CartState => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartTotal = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total + item.price, 0)
);