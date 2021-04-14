import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/interfaces/login-interface';
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public checkoutLoginForm = this.formBuilder.group({
    email: ['', Validators.compose([ Validators.email, Validators.required])],
    password : ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private authApi:AuthServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onLogin(credentials:LoginInterface){

    this.authApi.login(credentials).subscribe(
      data =>{
      this.authApi.setToken(data.access_token);
      this.authApi.setCurrentUser(data.user);
      this.authApi.roleRoute(data.user.roles[0].id);
    },
    error => console.log(error)
    );
    

  }

  

}
