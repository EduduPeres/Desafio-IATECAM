import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
 selector: 'app-edit-category.component.ts',
 template: `
   <h2 class="text-center m-5">Edit a Category</h2>
   <app-category-form [initialState]="category" (formSubmitted)="editCategory($event)"></app-category-form>
 `
})
export class EditCategoryComponent implements OnInit {
 category: BehaviorSubject<Category> = new BehaviorSubject({});
 id:string = "";
 constructor(
   private router: Router,
   private route: ActivatedRoute,
   private categoryService: CategoryService,
 ) { }

 ngOnInit() {
   const id = this.route.snapshot.paramMap.get('id');
   if (!id) {
     alert('No id provided');
   }
   this.id = id+"";
   this.categoryService.getCategory(id !).subscribe((category) => {
     this.category.next(category);
   });
 }

 editCategory(category: Category) {
   category.id = +this.id
   this.categoryService.updateCategory(category)
     .subscribe({
       next: () => {
         this.router.navigate(['/category']);
       },
       error: (error) => {
         alert('Failed to update category');
         console.error(error);
       }
     })
 }
}