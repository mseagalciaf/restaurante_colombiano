import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SucursalInterface } from 'src/app/interfaces/sucursal-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { RoleService } from 'src/app/services/role.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  roles:Array<string>;
  sucursales: SucursalInterface;
  public checkoutUserCreateForm = this.formBuilder.group({
    name: ['', Validators.required],
    role_id: ['', Validators.required],
    email: ['', Validators.compose([ Validators.email, Validators.required])],
    password : ['', Validators.required],
    sucursale_id: ['', Validators.required]
  });
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sucursalService: SucursalService,
    private roleService: RoleService,
    private userService: UserService

  ) { 
    this.getRoles();
    this.getSucursales();
  }

  ngOnInit(): void {
  }

  createUser(dataForm:UserInterface){
    if (this.checkoutUserCreateForm.valid) {
      this.userService.createUser(dataForm).subscribe(
        resp => {
          this.router.navigate(['admin/users/user']);
        },
        error => console.log(error)        
      )
    }else{

    }
    this.checkoutUserCreateForm.reset();
  }

  getSucursales(){
    this.sucursalService.getAllSucursales().subscribe(
      resp => {
        this.sucursales=resp.data;
        console.log(this.sucursales);
        
      },
      error => console.log(error)
      
    )
  }

  getRoles(){
    this.roleService.getAllRoles().subscribe(
      resp => {
        this.roles=resp.data
      },
      error => console.log(error)
    )
  }

}
