import { AuthService } from './../auth.service';
import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logsing',
  templateUrl: './logsing.component.html',
  styleUrls: ['./logsing.component.css']
})
@Injectable()

export class LogsingComponent implements CanActivate {
  signup=false
  login=!this.signup
  constructor(public authservice:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    const isLoggedIn = this.authservice.isLoggedIn();
    console.log('canActivate', isLoggedIn);
    if (!isLoggedIn) {
       window.location.href = '/loginsingup';
       return false
    }
    console.log('canActivate', isLoggedIn);

    return isLoggedIn;
    } 
    
  SignUp(element:HTMLAnchorElement,element2:HTMLAnchorElement){
    element.classList.add('aa')
     this.signup=true
     this.login=false
     element2.classList.remove('aa')

  }
  LogIN(element:HTMLAnchorElement,element2:HTMLAnchorElement){
    this.signup=false
     this.login=true
     element.classList.add('aa')
     element2.classList.remove('aa')
  }
  

}
