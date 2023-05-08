import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  getUserData(email:String,password:String){
    return this.http.get('http://localhost:8080/user/rudransh@gmail.com/hello');
  }

}
