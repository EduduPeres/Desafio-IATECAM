
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
 selector: 'app-categories-list',
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 products$: Observable<Product[]> = new Observable();

 constructor(private productService: ProductService) { }

 ngOnInit(): void {
   this.fetchProducts();
 }

 deleteProduct(id: number): void {
   this.productService.deleteProduct(id).subscribe({
     next: () => this.fetchProducts()
   });
 }

 private fetchProducts(): void {
  console.log("fetch")
   this.products$ = this.productService.getProducts();
 }
}