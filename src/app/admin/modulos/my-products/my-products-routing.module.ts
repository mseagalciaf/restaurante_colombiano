import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProductsTableComponent } from './components/my-products-table/my-products-table.component';

const routes: Routes = [
  {
    path: 'table', component: MyProductsTableComponent
  },
  {
    path: '**', redirectTo: 'table'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProductsRoutingModule { }
