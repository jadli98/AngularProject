import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { validateHeaderName } from 'http';
import { __values } from 'tslib';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  public products!: Array<Product>;
  public keyword : string = "";
  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next: (updatedProduct) => {
        product.checked = !product.checked;
      },
    });
  }
  handleDelete(product: Product) {
    if(confirm("Etes vous sure ?"))
    this.productService.deleteProduct(product).subscribe({
      next: (value) => {
        this.getProducts(); 
      },
    });
  }
  searchProduct(){
    this.productService.searchProduct(this.keyword).subscribe({
      next : value =>{
        this.products = value ;
      }
    })
  }
  getProducts() {
    this.productService.getProducts(0 , 1005).subscribe({
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
   this.getProducts();
  }
}
