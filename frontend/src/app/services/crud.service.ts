import { User } from '../components/views/home-register/form/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = "https://apisevendevz.herokuapp.com/user"
  constructor(private http: HttpClient) { }
  
  newUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user)
  }
}
