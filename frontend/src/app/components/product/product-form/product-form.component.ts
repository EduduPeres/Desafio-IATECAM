import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../interfaces/category';
import { Product } from './../../../interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
 selector: 'app-product-form',
 templateUrl:'./product-form.component.html',
 styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
 @Input()
 initialState: BehaviorSubject<Product> = new BehaviorSubject({});

 @Output()
 formValuesChanged = new EventEmitter<Product>();

 @Output()
 formSubmitted = new EventEmitter<Product>();

 productForm: FormGroup = new FormGroup({});
 categories$: Observable<Category[]> = new Observable();
 selectedCategoryId: string = "";
 constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

 get name() { return this.productForm.get('name')!; }
 get price() { return this.productForm.get('price')!; }
 get serie() { return this.productForm.get('serie')!; }

 ngOnInit() {
  this.fetchCategories();
   this.initialState.subscribe(product => {
     this.productForm = this.fb.group({
       name: [ product.name, [Validators.required,Validators.minLength(3)] ],
       category:[  this.selectedCategoryId],
       price: [ product.price, [Validators.required, Validators.min(1)] ],
       serie: [ product.serie, [Validators.required, Validators.pattern("^[0-9]+$")] ]
     });
   });

   this.productForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
 }
 updateSelectedCategory(value: string){
  this.selectedCategoryId = value
  console.log(this.selectedCategoryId)
 }
 submitForm(data : any) {
  console.log(this.selectedCategoryId)
  var id:number = +this.selectedCategoryId
  this.productForm = this.fb.group({
    name: [ data.name, [Validators.required,Validators.minLength(3)] ],
    category:[  id],
    price: [ data.price, [Validators.required, Validators.min(1)] ],
    serie: [ data.serie, [Validators.required, Validators.pattern("^[0-9]+$")] ]
  });
   this.formSubmitted.emit(this.productForm.value);
 }
 private fetchCategories(): void {
   this.categories$ = this.categoryService.getCategories();
 }
}