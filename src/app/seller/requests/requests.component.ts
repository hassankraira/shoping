import { ShopingCartComponent } from './../../buyer/buyer/shoping-cart/shoping-cart.component';
import { Products } from './../Products';
import { ProductAuthService } from './../product-auth.service';
import { AuthService } from './../../auth.service';
import { User } from './../../User';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  @Output()
   allRequest=Array.from(ShopingCartComponent.allProduct).filter((u)=> u.SellerName==this.AuthService.getuser())
  prodcutNumber:Number=0
  onProductSelected: EventEmitter<Products>;
seller:Products
bool=ShopingCartComponent.bool
constructor(public AuthService:AuthService,public productauth:ProductAuthService){
  this.seller=new Products('',0,0,'',0,"")

  this.onProductSelected=new EventEmitter()
}
 
 clicked(seler:Products){
  this.seller=seler
  this.onProductSelected.emit(seler)

}
isSelected(seller:Products):boolean{
  if(!seller||!this.seller){
  return false
}
return seller.Number===this.seller.Number

}
selected(seller:Products,sellername:string):boolean{
this.prodcutNumber=this.productauth.productArray.filter((u)=>u.SellerName==sellername).length
  return true
  }

  
}
