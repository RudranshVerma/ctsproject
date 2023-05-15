import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;
  truelogin:boolean=false;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: [''],

    }
    )
  }
  logIn() {
    this.http.get<any>("").subscribe( //signup array is stored in db.json
      res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password //checking login and password
        });
        if (user) {
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['list']);
          this.truelogin=true;
        }
        else {
          alert('User not found');
        }
      },
      err => {
        alert("something went wrong");
      }
    )
  }



}
