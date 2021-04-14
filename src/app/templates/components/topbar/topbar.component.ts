import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private authApi:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authApi.logout().subscribe(
      data => {
        this.router.navigate(['auth/login'])
      },
      error => console.log(error)
    );
    
  }
}
