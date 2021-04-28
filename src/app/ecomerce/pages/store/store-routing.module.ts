import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SidebarCategoryComponent } from './components/sidebar-category/sidebar-category.component';

const routes: Routes = [
  {
    path: '', component: ListProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
