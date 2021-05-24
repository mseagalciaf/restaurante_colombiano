import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule
  ]
})
export class HomeModule { }
