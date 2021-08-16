
import { UserRegister, UserLogin, getBearerTokenUser } from '../interfaces/userActions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class authService {

  baseUrl = "https://apisevendevz.herokuapp.com/user"
  baseUrlLogin = "https://apisevendevz.herokuapp.com/login"
  baseUserAuthenticated = "https://apisevendevz.herokuapp.com/users"

  getToken = <getBearerTokenUser>{
    token: localStorage.getItem("bearer token"),
    error: null
  }

  returnAuthenticated:Boolean;

  constructor(private http: HttpClient, private router: Router) { }

  newUser(user: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>(this.baseUrl, user)
  }

  joinUser(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.baseUrlLogin, user)
  }

  userAuthenticated(token): Observable<getBearerTokenUser> {
    return this.http.get<getBearerTokenUser>(
      this.baseUserAuthenticated,
      {
        headers: {
          'Authorization': 'BearerToken' + ' ' + token,
        }
      })
  }
  userIsAuthenticated(): Boolean{
      this.userAuthenticated(this.getToken.token).subscribe((res)=> {
        return this.returnAuthenticated = res.error;
      });
      return this.returnAuthenticated;
  }

  disconnect(){
    localStorage.removeItem("bearer token");
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 100);
  }
}

