import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/config/config.service';
import { SucursalInterface } from 'src/app/interfaces/sucursal-interface';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedSucursale = new FormControl();
  sucursales : SucursalInterface[];

  constructor(
    private sucursaleService: SucursalService
  ) { }

  ngOnInit(): void {
    this.getAllSucursales();
  }

  getAllSucursales(){
    this.sucursaleService.getAllSucursales().subscribe(
      resp => {
        this.sucursales = resp.data;
        this.selectedSucursale.setValue(this.sucursales[0].id);
        ConfigService.setselectedSucursale(this.sucursales[0].id);
        
      },
      error => console.log(error)
    )
  }

  changeSucursale(id:number){
    ConfigService.setselectedSucursale(id);
  }

}
