import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [];
  handleCheckProduct(product: any) {
    this.http
      .patch("http://localhost:8989/products/"+product.id, {
        checked: !product.checked
      })
      .subscribe({
        next: (updatedProduct) => {
          product.checked = !product.checked;
        },
      });
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8989/products').subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
