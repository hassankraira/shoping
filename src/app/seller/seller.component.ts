import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  section:string=''
  constructor(public router:Router,public authService:AuthService ){
  }
  toutch(element1 : HTMLAnchorElement,authorElements:HTMLAnchorElement[]){

    element1.classList.add('aa')
    
    for(let i =0 ; i<authorElements.length;i++){
    authorElements[i].classList.remove('aa')
    }
 
  }
  isLoggedIn():boolean{
  return this.authService.isLoggedIn()
  }
  LogOUt(){ 
    
    this.authService.logOut()

}
}
