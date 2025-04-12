
import { createAction, props } from '@ngrx/store';
import { Product } from './cart.model';

export const addToCart = createAction('[Cart] Add', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove', props<{ productId: number }>());