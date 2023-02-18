
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
 selector: 'app-categories-list',
  templateUrl:'./category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
 categories$: Observable<Category[]> = new Observable();

 constructor(private categoryService: CategoryService) { }

 ngOnInit(): void {
   this.fetchCategories();
 }

 deleteCategory(id: number): void {
   this.categoryService.deleteCategory(id).subscribe({
     next: () => this.fetchCategories()
   });
 }

 private fetchCategories(): void {
  console.log("fetch")
   this.categories$ = this.categoryService.getCategories();
 }
}