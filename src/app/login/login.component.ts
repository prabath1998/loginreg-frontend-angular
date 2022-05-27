import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  message:string='';

  constructor(private _service:RegistrationService,private _route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(data => {
      console.log("Response recieved");
      this._route.navigate(['/home'])
    },
    error => {
      console.log("Error");
      this.message = "Bad credentials, Please enter valid email address and password";
    }
    )
  }

  gotoRegister(){
    this._route.navigate(['/register']);
  }

}
