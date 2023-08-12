import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogINComponent {
 public sellerUser:string=''
constructor(public authservice:AuthService){
}

login(email:string,password:string){
  const a= this.authservice.logIN(email,password)
  if(a){
    const usts = this.authservice.User.find((u)=>u.Email.includes('1'+email))
    const ustb = this.authservice.User.find((u)=>u.Email.includes('2'+email))
    if(usts){
      this.sellerUser='/Seller'
    }
    else if(ustb){
    this.sellerUser='/Buyer'
    }
    console.log(true)
  }

  else{
    console.log(false)
  }
  
}
}
