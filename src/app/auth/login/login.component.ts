
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginInterface } from 'src/app/interfaces/login-interface';
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean=false;
  alertMessage:string;
  public checkoutLoginForm = this.formBuilder.group({
    email: ['', Validators.compose([ Validators.email, Validators.required])],
    password : ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private authApi:AuthServiceService,
    private router : Router,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {

  }

  onLogin(credentials:LoginInterface){
    this.loading=true;
    this.authApi.login(credentials).subscribe(
      data =>{
        this.authApi.setToken(data.access_token);
        this.authApi.setCurrentUser(data.user);
        this.loading=false;
        this.checkoutLoginForm.reset();
        this.authApi.roleRoute(data.user.roles[0].id);
      },
      error => {
        if (error.status==401) {
          this.loading=false;
          this.alertMessage="Credenciales incorrectos";
          this.checkoutLoginForm.reset();
        }else{
          this.loading=false;
          this.alertMessage="Error desconocido";
          this.checkoutLoginForm.reset();
        }
      }
    );
  }

}
