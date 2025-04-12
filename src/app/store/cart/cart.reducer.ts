import { createReducer, on } from '@ngrx/store';
import { Product } from './cart.model';
import { addToCart } from './cart.action';

export interface AppState {
  cart: CartState;
}

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product]
  }))
);