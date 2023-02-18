import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '',  redirectTo: 'category', pathMatch: 'full' },
 { path: 'category', component: CategoryListComponent },
 { path: 'category/new', component: CreateCategoryComponent },
 { path: 'category/edit/:id', component: EditCategoryComponent },
 { path: 'product', component: ProductListComponent },
 { path: 'product/new', component: CreateProductComponent },
 { path: 'product/edit/:id', component: EditProductComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }