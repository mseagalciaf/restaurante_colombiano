import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { 
     
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
  }
  

  
}
