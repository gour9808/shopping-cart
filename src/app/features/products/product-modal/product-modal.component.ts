import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/store/cart/cart.model';
import { addToCart } from 'src/app/store/cart/cart.action';
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private store: Store,
    private dialogRef: MatDialogRef<ProductModalComponent>,
    private snackBar: MatSnackBar
  ) {}

  addProductToCart() {
    this.store.dispatch(addToCart({ product: this.data }));
    this.dialogRef.close();
    this.snackBar.open('Added to cart!', 'Close', { duration: 2000 });
  }
}

