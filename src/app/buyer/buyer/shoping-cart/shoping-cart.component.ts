import { cost } from './cost';
import { BuyerHomeComponent } from './../buyer-home/buyer-home.component';
import { HomeComponent } from './../../../seller/home/home.component';
import { ProductAuthService } from './../../../seller/product-auth.service';
import { AuthService } from './../../../auth.service';
import { User } from './../../../User';
import { Products } from './../../../seller/Products';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent {
  @Output()
  onProductSelected: EventEmitter<Products>;
  prodcut:Products
  @Input() quantaty:Number=0
  qq:cost[]=[]
  costs:cost[]=[]
   nn:number=1
   static bool:boolean=false
   allpp=Array.from(ShopingCartComponent.allProduct)
   requestes:Array<Set<Products>>=[]
  totalSum:number=0
constructor(public AuthService:AuthService,public productauth:ProductAuthService){
  this.prodcut=new Products ('',0,0,'',0,'')
  this.onProductSelected=new EventEmitter()
  console.log(ShopingCartComponent.allProduct)
}
 static allProduct=BuyerHomeComponent.cartproduct


 clicked(Product:Products){
  this.prodcut=Product
  this.onProductSelected.emit(Product)

}
isSelected(Product:Products):boolean{
  if(!Product||!this.prodcut){
  return false
}
return Product.Number===this.prodcut.Number

}
cost(quantaty:string,id:number,price:number):cost[]{
 let tt:number=price*Number(quantaty)
 this.qq.push({id:id,quantaty:Number(quantaty),Price:price,totalcost:tt})
 
 const ids = new Set<number>();
 const updated: cost[] = [];

 for (const item of this.qq) {
   if (ids.has(item.id)) {
     const dd = updated.find(i => i.id === item.id);
     if (dd) {
       dd.quantaty = item.quantaty;
       dd.Price = item.Price;
       dd.totalcost = item.quantaty * item.Price;
     }
   } else {
     ids.add(item.id);
     const newItem: cost = {...item, totalcost: item.quantaty * item.Price };
     updated.push(newItem);
   }
 }
 this.costs=updated
 console.log(this.costs)
 console.log(updated)
 for(let c of updated){
  this.nn=c.quantaty
 }
 return updated

}
updateTotalSum():boolean {
  this.totalSum = this.costs.reduce((sum, cost) => sum + cost.totalcost, 0);
  return true
}
updateTotalSumAsync():boolean {
  setTimeout(() => {
    this.updateTotalSum();
  }, 2000);
  return true

}
remove(product:Products){
  ShopingCartComponent.allProduct.delete(product);

  this.qq = this.qq.filter((item) => item.id !== product.Number);
  const ids = new Set<number>();
  this.costs = [];

  for (const item of this.qq) {
    if (ids.has(item.id)) {
      const dd = this.costs.find((i) => i.id === item.id);
      if (dd) {
        dd.quantaty = item.quantaty;
        dd.Price = item.Price;
        dd.totalcost = item.quantaty * item.Price;
      }
    } else {
      ids.add(item.id);
      const newItem: cost = { ...item, totalcost: item.quantaty * item.Price };
      this.costs.push(newItem);
    }
  }

  this.updateTotalSum();
}



requsert(Products:Products){
  this.allpp=[]
  
ShopingCartComponent.bool=true

return 
}

}


