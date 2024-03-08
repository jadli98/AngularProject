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
  public getProducts(): Observable<any> {
    return this.http.get<Product[]>('http://localhost:8989/products');
  }
  public checkProduct(product : Product): Observable<any> {
    return this.http.patch('http://localhost:8989/products/' + product.id, {
      checked: !product.checked,
    });
  }
  public deleteProduct(product : Product){
    return this.http.delete('http://localhost:8989/products/' + product.id,);
  }
}
