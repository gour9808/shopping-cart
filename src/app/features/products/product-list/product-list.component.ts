import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/store/cart/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  uniqueCategories: string[] = [];
  filters = {
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    rating: '',
    keyword: ''
  };

  pageSize = 10;
  startIndex = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.uniqueCategories = [...new Set(this.products.map(p => p.category))];
      this.applyFilters();
    });
  }

  applyFilters() {
    this.startIndex = 0;
    const keyword = this.filters.keyword.toLowerCase();
    this.filteredProducts = this.products.filter(p => {
      const matchesCategory = this.filters.category ? p.category === this.filters.category : true;
      const matchesMinPrice = p.price >= this.filters.minPrice;
      const matchesMaxPrice = p.price <= this.filters.maxPrice;
      const matchesRating = this.filters.rating ? p.rating >= +this.filters.rating : true;
      const matchesKeyword = keyword ? (p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword)) : true;
      return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesRating && matchesKeyword;
    });
  }

  nextPage() {
    if (this.startIndex + this.pageSize < this.filteredProducts.length) {
      this.startIndex += this.pageSize;
    }
  }

  prevPage() {
    if (this.startIndex > 0) {
      this.startIndex -= this.pageSize;
    }
  }

}

