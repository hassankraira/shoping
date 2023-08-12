import { Products } from './../Products';
import { AuthService } from './../../auth.service';
import { ProductAuthService } from './../product-auth.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() onProductSelected : EventEmitter <Products>

 currentProduct:Products 
constructor(public productauth:ProductAuthService,public authservice:AuthService){
  this.onProductSelected=new EventEmitter()
    this.currentProduct=new Products('',0,0,'',0,'')
}
name=this.authservice.naem.toUpperCase()
products=this.productauth.productArray.filter((u)=>u.SellerName==this.authservice.getuser())
clicked(product:Products):void{
  this.currentProduct=product
  this.onProductSelected.emit(product)

}
isSelected(product:Products):boolean{
  if(!product||!this.currentProduct){
  return false
}
return product.Number===this.currentProduct.Number

}
istrue(){
  console.log()
}
}
