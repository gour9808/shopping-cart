import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/store/cart/cart.model';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(ProductModalComponent, { data: this.product });
  }
}