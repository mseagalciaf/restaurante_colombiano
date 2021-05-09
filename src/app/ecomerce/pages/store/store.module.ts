import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreRoutingModule } from './store-routing.module';
import { SidebarCategoryComponent } from './components/sidebar-category/sidebar-category.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BubbleCategoriesComponent } from './components/bubble-categories/bubble-categories.component';
import { ContainerStoreComponent } from './components/container-store/container-store.component';
import { AddProductCartModalComponent } from './components/add-product-cart-modal/add-product-cart-modal.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';


@NgModule({
  declarations: [SidebarCategoryComponent, ListProductsComponent, BubbleCategoriesComponent, ContainerStoreComponent, AddProductCartModalComponent, CartModalComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule
  ]
})
export class StoreModule { }
