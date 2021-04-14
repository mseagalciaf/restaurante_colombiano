import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterInterface } from 'src/app/interfaces/register-interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public checkoutRegisterForm = this.formBuilder.group({
    name : ['', Validators.required],
    email: ['',Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private authApi: AuthServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onRegister(dataForm:RegisterInterface){
    this.authApi.register(dataForm).subscribe(
      data => {
        this.authApi.setToken(data.access_token);
        this.authApi.setCurrentUser(data.user);
        this.authApi.roleRoute(data.user.roles[0].id); 
      },
      error => console.log(error)
    );

    
  }
}
