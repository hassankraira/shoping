import { AuthService } from './../auth.service';
import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class SingUpComponent {
  constructor(public authservice:AuthService){

  }
  ff=false
  message=''
  falid:boolean=true
  SingUp(name:string,email:string,phone:string,password:string,usertype:string,
    emailerror:HTMLInputElement,validpass:HTMLInputElement):boolean{
      const findEmail=this.authservice.User.find((u)=>u.Email=='1'+(email)||u.Email=='2'+email)
    if(!findEmail&&email!=''&&name!=''&&phone!=''&&password!=''&&validpass.value==password){
      if(usertype=='Seller'){
        emailerror.classList.remove('error')

      this.authservice.User.push({name:name,Email:'1'+email,phone:phone,password:password,type:usertype,count:0})
      }
      else if(usertype=='Buyer'){
        emailerror.classList.remove('error')

        this.authservice.User.push({name:name,Email:'2'+email,phone:phone,password:password,type:usertype,count:0})
      }
      this.ff=true
      this.falid=true
      this.message='Singup Successfully.'
      var self = this
      setTimeout(function() {
        self.message=''
        }.bind(this), 2500);
      console.log(this.authservice.User)
    return this.falid
    }
    else{
      if(findEmail||email==''){
        this.ff=false
      this.message='email error'
      emailerror.classList.add('error')
      }
      else{
        
        this.message=''
        emailerror.classList.remove('error')
      }
      if(validpass.value!=password){
        this.ff=false
        this.message='rewrite your password corectlly'
        validpass.classList.add('error')
      }
      else{
        validpass.classList.remove('error')
      }

    }
   
    this.falid=false
    return this.falid

  }
}
