import { Component, OnInit } from '@angular/core';
import { SucursalInterface } from 'src/app/interfaces/sucursal-interface';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursales:SucursalInterface;

  constructor(private sucursalService: SucursalService) { 
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.sucursalService.getAllSucursales().subscribe(
      resp => {
        this.sucursales=resp.data;
        console.log(this.sucursales);
        
      },
      error => console.log(error)      
    )
  }
}
