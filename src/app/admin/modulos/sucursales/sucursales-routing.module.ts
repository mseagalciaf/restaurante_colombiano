import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';

const routes: Routes = [
  {
    path: 'sucursal', component: SucursalComponent
  },
  {
    path: 'city', component: CityComponent
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
