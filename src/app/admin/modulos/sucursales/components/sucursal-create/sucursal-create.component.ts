import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityInterface } from 'src/app/interfaces/city-interface';
import { SucursalInterface } from 'src/app/interfaces/sucursal-interface';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal-create',
  templateUrl: './sucursal-create.component.html',
  styleUrls: ['./sucursal-create.component.css']
})
export class SucursalCreateComponent implements OnInit {

  //-------user to edit-------------
  isEdit:boolean=false;
  sucursal_id:number;
  sucursal:SucursalInterface;

  //------- Parameters for Form----------
  cities: Array<CityInterface>;

  public checkoutSucursalCreateForm = this.formBuilder.group({
    name: ['', Validators.required],
    city_id: ['', Validators.required]
  });

  constructor(
      private formBuilder : FormBuilder,
      private router : Router,
      private route : ActivatedRoute,
      private sucursalService : SucursalService
    ) { 
      this.getCities();

      if (this.sucursal_id=this.route.snapshot.params.id) {
        this.isEdit=true;
        this.getSucursal(this.sucursal_id);
      }
    }

  ngOnInit(): void {
  }

  createSucursal(dataForm:SucursalInterface){
    if (this.checkoutSucursalCreateForm.valid) {
      this.sucursalService.createSucursal(dataForm).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['admin/sucursales/sucursal']);
        },
        error => console.log(error)
        
      )
    }
  }

  getSucursal(id:number){
    this.sucursalService.getSucursal(id).subscribe(
      resp => {
        this.checkoutSucursalCreateForm.controls['name'].setValue(resp.data.name);
        this.checkoutSucursalCreateForm.controls['city_id'].setValue(resp.data.city_id);
      },
      error => console.log(error)      
    )
  }

  updateSucursal(dataForm: SucursalInterface, id:number=this.sucursal_id){
    if (this.checkoutSucursalCreateForm.valid) {
      this.sucursalService.updateSucursal(dataForm,id).subscribe(
        resp => {
          this.router.navigate(['admin/sucursales/sucursal'])
        },
        error => console.log(error)
        
      )
    }
  }

  deleteSucursal(id:number = this.sucursal_id){
    this.sucursalService.deleteSucursal(id).subscribe(
      resp => {
        this.router.navigate(['admin/sucursales/sucursal'])
      },
      error => console.log(error)
    )
  }

  getCities(){
    this.sucursalService.getAllCities().subscribe(
      resp => {
        this.cities=resp.data
      },
      error => console.log(error)
      
    )
  }


}
