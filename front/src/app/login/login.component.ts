import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

 constructor(private router:Router){}

 handlelogin(){
  console.log(this.username+"  "+this.password)
  if(this.username==="yash"&&this.password==="hello"){
    this.invalid=false;
    this.router.navigate(['home']);

  }
  else 
  this.invalid=true;
 }



 
}
