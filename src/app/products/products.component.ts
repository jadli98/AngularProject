import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products!: Array<Product>;
  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next: (updatedProduct) => {
        product.checked = !product.checked;
      },
    });
  }
  handleDelete(product: Product) {
    this.productService.deleteProduct(product).subscribe({
      next: (value) => {
        this.getProducts();
      },
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
