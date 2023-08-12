import { ProductAuthService } from './../../../seller/product-auth.service';
import { User } from './../../../User';
import { AuthService } from './../../../auth.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})

export class SellersComponent {
  @Output()
  prodcutNumber:Number=0
  onProductSelected: EventEmitter<User>;
seller:User
constructor(public AuthService:AuthService,public productauth:ProductAuthService){
  this.seller=new User('','','','','',0)

  this.onProductSelected=new EventEmitter()
}
allSeller=this.AuthService.User.filter((u)=> u.type=='Seller')


 clicked(seler:User){
  this.seller=seler
  this.onProductSelected.emit(seler)

}
isSelected(seller:User):boolean{
  if(!seller||!this.seller){
  return false
}
return seller.Email===this.seller.Email

}
selected(seller:User,sellername:string):boolean{
this.prodcutNumber=this.productauth.productArray.filter((u)=>u.SellerName==sellername).length
  return true 
  }
}
