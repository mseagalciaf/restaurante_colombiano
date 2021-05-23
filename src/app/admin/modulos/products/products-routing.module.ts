import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ModifierCreateComponent } from './components/modifier-create/modifier-create.component';
import { ModifiersComponent } from './components/modifiers/modifiers.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/create', component: ProductCreateComponent
  },
  {
    path: 'products/edit/:id', component: ProductCreateComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'groups', component: GroupsComponent
  },
  {
    path: 'modifiers', component: ModifiersComponent
  },
  {
    path: 'modifier/create', component: ModifierCreateComponent
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
