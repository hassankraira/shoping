import { BuyerComponent } from './buyer/buyer/buyer.component';
import { SellersComponent } from './buyer/buyer/sellers/sellers.component';
import { ShopingCartComponent } from './buyer/buyer/shoping-cart/shoping-cart.component';
import { BuyerModule } from './buyer/buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { RequestsComponent } from './seller/requests/requests.component';
import { RemoveProductComponent } from './seller/remove-product/remove-product.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { HomeComponent } from './seller/home/home.component';
import { User_snigUp } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { LogINComponent } from './log-in/log-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogsingComponent } from './logsing/logsing.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BuyerHomeComponent } from './buyer/buyer/buyer-home/buyer-home.component';

const routes:Routes=[
  
  {path: '', redirectTo: 'loginsingup', pathMatch: 'full' },
  {path:'loginsingup',component:LogsingComponent},
  {path:'Seller',component:SellerComponent,canActivate:[LogsingComponent],
  children:[
    {path: '', redirectTo: 'Home', pathMatch: 'full' },
     {path:'Home',component:HomeComponent},
     {path:'AddProduct',component:AddProductComponent},
     {path:'RemoveProduct',component:RemoveProductComponent},
     {path:'Requests',component:RequestsComponent},

    ]
    },

  {path:'Buyer',component:BuyerComponent,canActivate:[LogsingComponent],children:[
    {path:'', redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component:BuyerHomeComponent},
    {path:'Cart',component:ShopingCartComponent},
    {path:'sellers',component:SellersComponent}
  ]}]

@NgModule({
  declarations: [
    AppComponent,
    LogINComponent,
    SingUpComponent,
    LogsingComponent,

  
  ],
  imports:[
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    NgbModule,
    SellerModule,
    BuyerModule
  ],
  exports:[
    RouterModule
  ],
  providers: [LogsingComponent,User_snigUp],
  bootstrap: [AppComponent]
})
export class AppModule { }
