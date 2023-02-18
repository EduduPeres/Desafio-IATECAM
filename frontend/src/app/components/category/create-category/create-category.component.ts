import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-add-employee',
 template: `
   <h2 class="text-center m-5">Add a New Category</h2>
   <app-category-form (formSubmitted)="addCategory($event)"></app-category-form>
 `
})
export class CreateCategoryComponent {
 constructor(
   private router: Router,
   private categoryService: CategoryService
 ) { }

 addCategory(category: Category) {
   this.categoryService.createCategory(category)
     .subscribe({
       next: () => {
         this.router.navigate(['/category']);
       },
       error: (error) => {
         alert("Failed to create category");
         console.error(error);
       }
     });
 }
}