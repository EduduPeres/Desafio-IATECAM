import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ProductFormComponent,
    CategoryFormComponent,
    EditCategoryComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
