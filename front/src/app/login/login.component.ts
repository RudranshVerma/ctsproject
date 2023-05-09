import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username= "rudransh";
 password="hello";
 invalidmessage="Invalid Message";
 invalid=false;


 handlelogin(){
  console.log(this.username+"  "+this.password)
  if(this.username==="yash"&&this.password==="hello"){
    this.invalid=false;
  }
  else 
  this.invalid=true;
 }
}
