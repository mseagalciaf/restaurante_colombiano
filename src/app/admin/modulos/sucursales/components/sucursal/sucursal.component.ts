import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalInterface } from 'src/app/interfaces/sucursal-interface';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  isLoading:boolean=true;
  sucursales:SucursalInterface;

  constructor(
      private sucursalService: SucursalService,
      private router: Router
    ) { 
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.sucursalService.getAllSucursales().subscribe(
      resp => {
        this.isLoading=false;
        this.sucursales=resp.data;        
      },
      error => console.log(error)      
    )
  }

  editSucursal(id:number){
    this.router.navigate(['admin/sucursales/sucursal/edit/',id]);
  }

  deleteSucursal(id:number){
    this.sucursalService.deleteSucursal(id).subscribe(
      resp => {
        this.getAll();
      },
      error => console.log(error)
    )
  }
}
