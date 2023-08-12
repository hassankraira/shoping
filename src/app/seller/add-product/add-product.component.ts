import { AuthService } from './../../auth.service';
import { ProductAuthService } from './../product-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  message=''
  falid=false
  ff=false
   p=  this.authservice.getuser()
   constructor(public ProductAuthService:ProductAuthService,public authservice:AuthService){}
  AddProduct(name:string,price:string,quantaty:string,image:string){
   const sellername=this.authservice.getuser()
      this.ProductAuthService.Addproduct({
        Name: name, Price: Number(price), Quntaty: Number(quantaty), Image: image, SellerName:this.authservice.getuser() ,
        Number: this.ProductAuthService.productArray.length
      })
      this.ff=true
      this.falid=true
      this.message='product added successflly'
  }
}
