import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  url:string="http://mike.com/api_restaurante/public/api/"
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  
  constructor() { }
}
