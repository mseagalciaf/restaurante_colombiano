import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SucursalInterface } from '../interfaces/sucursal-interface';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  url:string="http://mike.com/api_restaurante/public/api/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  constructor(private http: HttpClient) { }

  getAllSucursales():Observable<any>{
    let customUrl = this.url + "sucursales";
    return this.http.get(customUrl, {headers: this.headers})
  }

  getSucursal(id:number): Observable<any>{
    let customUrl = this.url + "sucursales/"+id;
    return this.http.get(customUrl,{headers: this.headers})
  }

  getAllCities(): Observable<any>{
    let customUrl = this.url+'cities';
    return this.http.get(customUrl,{headers: this.headers});
  }

  createSucursal(dataForm:SucursalInterface): Observable<any>{
    let customUrl = this.url+'sucursales';
    return this.http.post(customUrl,dataForm,{headers: this.headers});
  }

  updateSucursal(dataForm:SucursalInterface, id:number): Observable<any>{
    let customUrl = this.url + 'sucursales/'+id;
    return this.http.put(customUrl,dataForm,{headers: this.headers})
  }

  deleteSucursal(id:number): Observable<any>{
    let customUrl = this.url+'sucursales/'+id
    return this.http.delete(customUrl,{headers: this.headers});
  }
}
