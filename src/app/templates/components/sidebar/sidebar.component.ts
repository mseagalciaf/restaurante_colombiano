import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { UserInterface } from 'src/app/interfaces/user-interface';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user:UserInterface;
  roles=[];
  constructor(
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem(ConfigService.currentUserName));
    this.roles = this.user.roles.map( (role) => role.id );
  }
}
