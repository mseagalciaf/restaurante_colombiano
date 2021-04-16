import { Component, OnInit } from '@angular/core';
import { CityInterface } from 'src/app/interfaces/city-interface';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities:CityInterface;

  constructor(private cityService: CityService) {
    this.getAll();
   }

  ngOnInit(): void {
  }

  getAll(){
    this.cityService.getAllCities().subscribe(
      resp => {
        this.cities=resp.data
      },
      error => console.log(error)
    )
  }
}
