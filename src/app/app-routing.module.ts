import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleCategoriesComponent } from './ecomerce/pages/store/components/bubble-categories/bubble-categories.component';
import { CartModalComponent } from './ecomerce/pages/store/components/cart-modal/cart-modal.component';
import { ContainerStoreComponent } from './ecomerce/pages/store/components/container-store/container-store.component';
import { ListProductsComponent } from './ecomerce/pages/store/components/list-products/list-products.component';
import { SidebarCategoryComponent } from './ecomerce/pages/store/components/sidebar-category/sidebar-category.component';
import { AdminGuard } from './guards/admin.guard';
import { TemplateAdminComponent } from './templates/template-admin/template-admin.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';

const routes: Routes = [
  {
    path:'', component: TemplatePrincipalComponent, children:[
      
      {
        path:'home', 
        loadChildren: () => import('./ecomerce/pages/home/home.module').then(mod => mod.HomeModule)
      },
      {
        path: 'store', component: ContainerStoreComponent, children:[
          {
            path: '', component: BubbleCategoriesComponent
          },
          {
            path: 'products',
            loadChildren: () => import('./ecomerce/pages/store/store.module').then(mod => mod.StoreModule)
          }
        ]
      },
      {
        path:'', redirectTo: '/home', pathMatch:'full'
      }
    ]
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path:'admin', component: TemplateAdminComponent, children:[
      {
        path: 'sucursales',
        loadChildren: () => import('./admin/modulos/sucursales/sucursales.module').then(mod => mod.SucursalesModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./admin/modulos/users/users.module').then(mod => mod.UsersModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./admin/modulos/products/products.module').then(mod => mod.ProductsModule)
      },
      {
        path: 'myproducts',
        loadChildren: () => import('./admin/modulos/my-products/my-products.module').then(mod => mod.MyProductsModule)
      }
      
    ],
    data: {
      roles : [1,2]
    },
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
