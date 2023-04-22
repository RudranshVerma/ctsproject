import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  user:User= new User();

  public loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private userservice: UserloginService,private router:Router){}

  ngOnInit():void{  }


  logIn(){
    console.log(this.user);
    this.userservice.loginUser(this.user).subscribe(data=>{
      alert("login successfully")
    },error=>alert("sorry enter correct credentials"));

  }


}
