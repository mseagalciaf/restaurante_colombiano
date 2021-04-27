import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  myName:string;
  
  constructor(private authApi:AuthServiceService, private router:Router) { 
    this.myName = JSON.parse(localStorage.getItem('currentUser'))['name'];
  }

  ngOnInit(): void {
  }

  onLogout(){
    this.authApi.logout().subscribe(
      data => {
        this.router.navigate(['home'])
      },
      error => console.log(error)
    );
    
  }
}
