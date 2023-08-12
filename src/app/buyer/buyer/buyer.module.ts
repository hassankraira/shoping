import { BuyerHomeComponent } from './buyer-home/buyer-home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SellersComponent } from './sellers/sellers.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';



@NgModule({
  declarations: [
    BuyerComponent,
    ShopingCartComponent,
    SellersComponent,
    BuyerHomeComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class BuyerModule { }
