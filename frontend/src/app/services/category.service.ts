import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
 providedIn: 'root'
})
export class CategoryService {
 private url = 'http://localhost:8000';
 private categories$: Subject<Category[]> = new Subject();

 constructor(private httpClient: HttpClient) { }

 private refreshCategories() {
   this.httpClient.get<Category[]>(`${this.url}/categories/`)
     .subscribe(categories => {
       this.categories$.next(categories);
     });
 }

 getCategories(): Subject<Category[]> {
   this.refreshCategories();
   return this.categories$;
 }
 getCategory(id:string): Observable<Category> {
  return this.httpClient.get<Category>(`${this.url}/category/${id}`);
 }
 createCategory(category: Category): Observable<string> {
   return this.httpClient.post(`${this.url}/category`, category, { responseType: 'text' });
 }

 updateCategory(category: Category): Observable<string> {
   return this.httpClient.put(`${this.url}/category`, category, { responseType: 'text' });
 }

 deleteCategory(id: number): Observable<string> {
   return this.httpClient.delete(`${this.url}/category/${id}`, { responseType: 'text' });
 }
}