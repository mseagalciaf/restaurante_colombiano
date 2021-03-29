import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public checkoutForm = this.formBuilder.group({
    email: '',
    contraseña: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
