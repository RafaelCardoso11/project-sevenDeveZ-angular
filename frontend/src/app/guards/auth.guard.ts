import { Emitters } from './../emitters/emitters';

import { authService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private authService: authService,
    private router: Router
  ) { }

  token = localStorage.getItem('bearer token');
  canActivate() {
    return this.authService.userAuthenticated(this.token).toPromise()
    .catch(()=>{
      this.router.navigate(['/login']);
      return false;
    }).then((res)=>{
      Emitters.nameProfile.emit(res['User'].name)
      return true;
    })
  }
}
