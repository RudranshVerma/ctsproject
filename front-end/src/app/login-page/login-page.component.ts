import { Router } from '@angular/router';
import { UserserviceService } from './../userservice.service';
import { Component ,OnInit } from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model:any={};
  getData!:any;
  constructor(private userservice:UserserviceService,private router:Router){}

  ngOnInit():void{  }


  logIn(){
    var email= this.model.email;
    var password=this.model.password;

    this.userservice.getUserData(email,password).subscribe((res)=>{
      this.getData=res;
      console.log(this.getData);
      if(this.getData==true){
        this.router.navigate(["/home"]);
      }

    })


  }


}
