import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ShopModule } from '../shop/shop.module';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopModule,
    CarouselModule
  ],
  exports: [
    HomeComponent

  ]
})
export class HomeModule { }
