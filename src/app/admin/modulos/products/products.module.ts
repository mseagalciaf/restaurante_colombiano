import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ModifiersComponent } from './components/modifiers/modifiers.component';
import { ModifierCreateComponent } from './components/modifier-create/modifier-create.component';


@NgModule({
  declarations: [ProductCreateComponent, CategoryCreateComponent, GroupCreateComponent, ProductsComponent, CategoriesComponent, GroupsComponent, ModifiersComponent, ModifierCreateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
