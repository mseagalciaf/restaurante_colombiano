import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ModifiersComponent } from './components/modifiers/modifiers.component';
import { ModifierCreateComponent } from './components/modifier-create/modifier-create.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import { AddGroupModalComponent } from './components/add-group-modal/add-group-modal.component';
import { AddModifierModalComponent } from './components/add-modifier-modal/add-modifier-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ProductCreateComponent, GroupCreateComponent, ProductsComponent, CategoriesComponent, GroupsComponent, ModifiersComponent, ModifierCreateComponent, AddCategoryModalComponent, AddGroupModalComponent, AddModifierModalComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProductsModule { }
