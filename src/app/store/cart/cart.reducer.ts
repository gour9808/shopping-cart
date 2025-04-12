import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.action';
import { Product } from './cart.model';
export const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => [...state, product]),
  on(removeFromCart, (state, { productId }) => state.filter(p => p.id !== productId))
);