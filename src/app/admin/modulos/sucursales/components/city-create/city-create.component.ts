import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityInterface } from 'src/app/interfaces/city-interface';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {

  //-------user to edit-------------
  isEdit:boolean=false;
  city_id:number;
  city:CityInterface;

  public checkoutCityCreateForm = this.formBuilder.group({
    name: ['', Validators.required]
  });
  constructor(
    private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private cityService : CityService
  ) { 
    if (this.city_id= this.route.snapshot.params.id) {
      this.getCity(this.city_id);
      this.isEdit=true;
    }
  }

  ngOnInit(): void {
  }

  createCity(dataForm:CityInterface){
    if (this.checkoutCityCreateForm.valid) {
      this.cityService.createCity(dataForm).subscribe(
        resp => {
          this.router.navigate(['admin/sucursales/city']);
        },
        error => console.log(error)        
      )
    }
  }

  getCity(id:number){
    this.cityService.getCity(id).subscribe(
      resp => {
        this.checkoutCityCreateForm.controls['name'].setValue(resp.data.name);
      },
      error => console.log(error)
    )
  }

  editCity(dataForm:CityInterface,id:number=this.city_id){
    if (this.checkoutCityCreateForm.valid) {
      this.cityService.updateCity(dataForm,id).subscribe(
        resp => {
          this.router.navigate(['admin/sucursales/city']);
        },
        error => console.log(error)
      )
    }
  }

  deleteCity(id:number=this.city_id){
    this.cityService.deleteCity(id).subscribe(
      resp => {
        this.router.navigate(['admin/sucursales/city']);
      },
      error => console.log(error)
    )
  }
}
