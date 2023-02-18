import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
 selector: 'app-edit-category.component.ts',
 template: `
   <h2 class="text-center m-5">Edit a Product</h2>
   <app-product-form [initialState]="product" (formSubmitted)="editProduct($event)"></app-product-form>
 `
})
export class EditProductComponent implements OnInit {
  product: BehaviorSubject<Product> = new BehaviorSubject({});
 id:string = "";
 constructor(
   private router: Router,
   private route: ActivatedRoute,
   private productService: ProductService,
 ) { }

 ngOnInit() {
   const id = this.route.snapshot.paramMap.get('id');
   if (!id) {
     alert('No id provided');
   }
   this.id = id+"";
   this.productService.getProduct(id !).subscribe((product) => {
     this.product.next(product);
   });
 }

 editProduct(product: Product) {
  product.id = +this.id
   this.productService.updateProduct(product)
     .subscribe({
       next: () => {
         this.router.navigate(['/product']);
       },
       error: (error) => {
         alert('Failed to update product');
         console.error(error);
       }
     })
 }
}