import { AuthService } from './auth.service';
import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HShoping';
  constructor(private router:Router,public authService:AuthService ){

  }

}
