import { authService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: authService,
    private router: Router
  ) { }

  canActivate(): boolean{
  
    if(this.authService.userIsAuthenticated() == false){
      return true;
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  

}
