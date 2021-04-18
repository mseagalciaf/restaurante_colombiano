import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { CityComponent } from './components/city/city.component';
import { SucursalCreateComponent } from './components/sucursal-create/sucursal-create.component';
import { CityCreateComponent } from './components/city-create/city-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SucursalComponent, CityComponent, SucursalCreateComponent, CityCreateComponent],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class SucursalesModule { }
