
import { UserRegister, UserLogin } from '../interfaces/userActions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = "https://apisevendevz.herokuapp.com/user"
  baseUrlLogin = "https://apisevendevz.herokuapp.com/login"
  
  constructor(private http: HttpClient) { }
  
  newUser(user: UserRegister): Observable<UserRegister>{
    return this.http.post<UserRegister>(this.baseUrl, user) 
  }
  
  joinUser(user: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(this.baseUrlLogin, user) 
  }
}

