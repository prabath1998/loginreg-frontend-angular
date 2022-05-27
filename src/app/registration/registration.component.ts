import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();

  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(data => {
      console.log("Registration Successfull");
      this.router.navigate(['/login']);
    },
    error => {
      console.log(error);
      
    }
    );
  }

}
