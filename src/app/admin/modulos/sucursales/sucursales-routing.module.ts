import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityCreateComponent } from './components/city-create/city-create.component';
import { CityComponent } from './components/city/city.component';
import { SucursalCreateComponent } from './components/sucursal-create/sucursal-create.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';

const routes: Routes = [
  {
    path: 'sucursal', component: SucursalComponent
  },
  {
    path: 'sucursal/create', component: SucursalCreateComponent
  },
  {
    path: 'sucursal/edit/:id', component: SucursalCreateComponent
  },
  {
    path: 'city', component: CityComponent
  },
  {
    path: 'city/create', component: CityCreateComponent
  },
  {
    path: 'city/edit/:id', component: CityCreateComponent
  },
  {
    path: '', redirectTo: 'sucursal', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
