import { AuthService } from './../../auth.service';
import { ProductAuthService } from './../product-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent {
  falid=false
  message=''
  ff=false
  constructor(public productauthservice:ProductAuthService,public authservice:AuthService ){}
Remove(Numberr:string){
  if(this.productauthservice.RemoveProduct(Number(Numberr))){
  this.falid=true
this.message='Product '+Numberr+' Removed'
this.ff=true
}
else{
  this.falid=false
  this.message='Product '+Numberr+' Not found'
  this.ff=false
}
}
}
