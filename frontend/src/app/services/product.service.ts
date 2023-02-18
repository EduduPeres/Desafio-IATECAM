import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
 providedIn: 'root'
})
export class ProductService {
 private url = 'http://localhost:8000';
 private products$: Subject<Product[]> = new Subject();

 constructor(private httpClient: HttpClient) { }

 private refreshProducts() {
   this.httpClient.get<Product[]>(`${this.url}/products/`)
     .subscribe(products => {
       this.products$.next(products);
     });
 }

 getProducts(): Subject<Product[]> {
   this.refreshProducts();
   return this.products$;
 }
 getProduct(id:string): Observable<Product> {
  return this.httpClient.get<Product>(`${this.url}/product/${id}`);
 }

createProduct(product: Product): Observable<string> {
  return this.httpClient.post(`${this.url}/product`, product, { responseType: 'text' });
}

updateProduct(product: Product): Observable<string> {
  return this.httpClient.put(`${this.url}/product`, product, { responseType: 'text' });
}

deleteProduct(id: number): Observable<string> {
  return this.httpClient.delete(`${this.url}/product/${id}`, { responseType: 'text' });
}
}