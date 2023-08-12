import { AuthService } from './../auth.service';
import { Products } from './Products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductAuthService {
  constructor(public authservice:AuthService){}
  
   public productArray:Products[]=[
  ]
  Addproduct(pro:Products):boolean{
    this.productArray.push(pro)
    sessionStorage.setItem(pro.Name,pro.Number.toString())
    return true
    }
  RemoveProduct(proNum:Number):boolean{
    let Products=this.productArray.filter((u)=>u.SellerName==this.authservice.getuser())

 if( Products.find(
      (u) => u.Number==proNum&&    this.productArray.splice(u.Number)
      ) ){
        return true
      }
     return false
  }

}
export const Pro_Auth :Array<any>=[
  {provide:ProductAuthService,userclass:ProductAuthService},
]
