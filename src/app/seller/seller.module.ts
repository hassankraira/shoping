import { Pro_Auth } from './product-auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { SellerComponent } from './seller.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { RequestsComponent } from './requests/requests.component';


@NgModule({
 
  declarations: [
    SellerComponent,
    HomeComponent,
    AddProductComponent,
    RemoveProductComponent,
    RequestsComponent,



 
  ],
  exports:[
    HomeComponent,
    AddProductComponent,
    RemoveProductComponent,
    RequestsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  providers:[
    Pro_Auth
  ],
  bootstrap: [SellerComponent]

})
export class SellerModule { }
