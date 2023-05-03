import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private baseUrl="http://localhost:8081/user/login";

  constructor(private http:HttpClient) {  }
  loginUser(user: User):Observable<Object>{


    return this.http.post(`${this.baseUrl}`,user);
  }
}
