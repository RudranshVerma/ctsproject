import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit():void{
    this.loginForm=this.formbuilder.group({
      email:[''],
      password:[''],
      
    }
    )
  }
  logIn(){
    this.http.get<any>("https://my-data-4hkn.onrender.com/signup").subscribe(
      res=>{
        const user= res.find((a:any)=>{
          return a.email=== this.loginForm.value.email && a.password=== this.loginForm.value.password
        });
        if(user){
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['home']);
        }
        else{
          alert('User not found');
        }
      },
      err=>{
        alert("something went wrong");
      }
    )
  }


}
