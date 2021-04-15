import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { CityComponent } from './components/city/city.component';


@NgModule({
  declarations: [SucursalComponent, CityComponent],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
