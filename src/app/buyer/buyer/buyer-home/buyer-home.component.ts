import { Products } from './../../../seller/Products';
import { AuthService } from './../../../auth.service';
import { ProductAuthService } from './../../../seller/product-auth.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})

export class BuyerHomeComponent {
onProductSelected : EventEmitter<Products>
 currentProduct:Products 
 static cartproduct: Set<Products> = new Set<Products>()
  name=this.authservice.naem.toUpperCase()
  allProducts= this.ProductAuthService.productArray
  constructor(public ProductAuthService:ProductAuthService,public authservice:AuthService){
    this.onProductSelected=new EventEmitter()
    this.currentProduct=new Products('',0,0,'',0,'')
  }
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
  cart(product:Products){
  BuyerHomeComponent.cartproduct.add(product)
  console.log(BuyerHomeComponent.cartproduct)
  }


}

