import { User } from './User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users:string[]=[]

 public userr:string=''
  public User:Array<User>=[{name:'hassan',phone:'0592434558',Email:'1krairahassan@gmail.com',password:'ha1a2haa',type:'Seller',count:0},
  {name:'hassan kraira',phone:'+972592434558',Email:'2gradhassan9@gmail.com',password:'ha1a2haa',type:'Buyer',count:0}]
 naem:string=''
 
   logIN(user:string,password:string):boolean{
  const userFound = this.User.find(
    (u) => u.Email.includes(user) && u.password === password)
   let Names=this.User.find(
      (u) => u.Email.includes(user) && u.password === password)
      this.naem=Names!.name
if(userFound){
  this.User.find( (u) => u.Email.includes(user) && u.password === password)?.name
this.userr=user
this.users.push(this.userr)
console.log()
  localStorage.setItem(this.userr,user)
  return true
}
return false
}
logOut():any{
  return false
}
getuser():any{
return localStorage.getItem(this.userr)
}
isLoggedIn():boolean{
return localStorage.getItem(this.userr)!==null
}

  constructor() { }
}

 export const User_snigUp : Array<any>=[
   {provide:AuthService,userclass:AuthService},
 ]
