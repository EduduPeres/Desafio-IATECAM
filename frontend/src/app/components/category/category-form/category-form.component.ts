import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../interfaces/category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
 selector: 'app-category-form',
 templateUrl:'./category-form.component.html',
 styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
 @Input()
 initialState: BehaviorSubject<Category> = new BehaviorSubject({});

 @Output()
 formValuesChanged = new EventEmitter<Category>();

 @Output()
 formSubmitted = new EventEmitter<Category>();

 categoryForm: FormGroup = new FormGroup({});
 constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

 get name() { return this.categoryForm.get('name')!; }

 ngOnInit() {
   this.initialState.subscribe(category => {
     this.categoryForm = this.fb.group({
        
       name: [ category.name, [Validators.required,Validators.minLength(3)] ]
     });
   });

   this.categoryForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
 }
 submitForm(data : any) {
   this.formSubmitted.emit(this.categoryForm.value);
 }
}