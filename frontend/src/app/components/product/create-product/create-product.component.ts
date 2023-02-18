import { Product } from './../../../interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-add-employee',
 template: `
   <h2 class="text-center m-5">Add a New Category</h2>
   <app-product-form (formSubmitted)="addProduct($event)"></app-product-form>
 `
})
export class CreateProductComponent {
 constructor(
   private router: Router,
   private productService: ProductService
 ) { }

 addProduct(product: Product) {
   this.productService.createProduct(product)
     .subscribe({
       next: () => {
         this.router.navigate(['/product']);
       },
       error: (error) => {
         alert("Failed to create product");
         console.error(error);
       }
     });
 }
}