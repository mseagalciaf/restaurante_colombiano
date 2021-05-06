import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { SidebarCategoryComponent } from './components/sidebar-category/sidebar-category.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BubbleCategoriesComponent } from './components/bubble-categories/bubble-categories.component';
import { ContainerStoreComponent } from './components/container-store/container-store.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';


@NgModule({
  declarations: [SidebarCategoryComponent, ListProductsComponent, BubbleCategoriesComponent, ContainerStoreComponent, AddProductModalComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
