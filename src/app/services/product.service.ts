import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<Product> = [];
  constructor(private http: HttpClient) {}
  public getProducts(page: number = 1, size: number = 3 ): Observable<any> {
    return this.http.get<Product[]>(`http://localhost:8989/products?_page=${page}&_limit=${size}`);
  }
  public checkProduct(product: Product): Observable<any> {
    return this.http.patch<Product>(
      'http://localhost:8989/products/' + product.id,
      {
        checked: !product.checked,
      }
    );
  }
  public deleteProduct(product: Product) {
    return this.http.delete('http://localhost:8989/products/' + product.id);
  }
  saveProduct(product: Product): Observable<any> {
    return this.http.post<Product>('http://localhost:8989/products', product);
  }
  public searchProduct(keyword : string): Observable<Array<Product>> {
    return this.http.get<Product[]>(`http://localhost:8989/products?name_like=${keyword}`);
  }
}
