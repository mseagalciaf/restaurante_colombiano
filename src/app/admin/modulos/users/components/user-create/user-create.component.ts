import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  //-------user to edit-------------
  isEdit:boolean=false;
  user_id:number;
  user:UserInterface;

  //------- Parameters for Form----------
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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sucursalService: SucursalService,
    private roleService: RoleService,
    private userService: UserService

  ) { 
    this.getRoles();
    this.getSucursales();
    if (this.route.snapshot.params.id) {
      this.user_id = this.route.snapshot.params.id;
      this.isEdit=true;
      this.getUser(this.user_id);
    }else{
      console.log('no existe edit, paso a create');
      
    }
    
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

  updateUser(dataForm:UserInterface,id:number = this.user_id){
    console.log(dataForm);
    this.userService.updateUser(dataForm,id).subscribe(
      resp => {
        this.router.navigate(['/admin/users/'])
      },
      error => console.log(error)
      
    )
  }

  getUser(user_id:number){
    this.userService.getUSer(user_id).subscribe(
      resp => {
        this.user=resp.data;
        console.log(this.user);
        this.checkoutUserCreateForm.controls['name'].setValue(this.user.name);
        this.checkoutUserCreateForm.controls['role_id'].setValue(this.user.roles[0].id);
        this.checkoutUserCreateForm.controls['email'].setValue(this.user.email);
        this.checkoutUserCreateForm.controls['sucursale_id'].setValue(this.user.sucursale_id);
      },
      error => console.log(error)
    )
  }

  getSucursales(){
    this.sucursalService.getAllSucursales().subscribe(
      resp => {
        this.sucursales=resp.data;
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
