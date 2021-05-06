import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isLoading:boolean=true;
  users:UserInterface;
  
  constructor(private userService:UserService) { 
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.userService.getAllUsers().subscribe(
      resp => {
        this.isLoading=false;
        this.users=resp.data;
        
      },
      error => console.log(error)
      
    )
  }

}
