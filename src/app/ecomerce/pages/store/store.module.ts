import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreRoutingModule } from './store-routing.module';
import { SidebarCategoryComponent } from './components/sidebar-category/sidebar-category.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BubbleCategoriesComponent } from './components/bubble-categories/bubble-categories.component';
import { ContainerStoreComponent } from './components/container-store/container-store.component';
import { AddProductCartModalComponent } from './components/add-product-cart-modal/add-product-cart-modal.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';

//---------------Angular Material--------------------------
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [SidebarCategoryComponent, ListProductsComponent, BubbleCategoriesComponent, ContainerStoreComponent, AddProductCartModalComponent, CartModalComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class StoreModule { }
