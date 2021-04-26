import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselHomeComponent } from '../carousel-home/carousel-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
