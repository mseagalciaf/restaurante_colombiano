import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityInterface } from 'src/app/interfaces/city-interface';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  isLoading:boolean=true;
  cities:CityInterface;


  constructor(
    private cityService: CityService,
    private router : Router
    ) {
      this.getAll();
   }

  ngOnInit(): void {
  }

  getAll(){
    this.cityService.getAllCities().subscribe(
      resp => {
        this.isLoading=false;
        this.cities=resp.data
      },
      error => console.log(error)
    )
  }

  editCity(id:number){
    this.router.navigate(['admin/sucursales/city/edit/',id])
  }

  deleteCity(id:number){
    this.cityService.deleteCity(id).subscribe(
      resp => {
        this.getAll()
      },
      error => console.log(error)
    )
  }
}
