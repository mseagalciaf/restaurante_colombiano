import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInterface } from '../interfaces/city-interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities:CityInterface;
  url:string="http://mike.com/api_restaurante/public/api/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  constructor(private http: HttpClient) { }

  getAllCities():Observable<any>{
    let customUrl = this.url+'cities';
    return this.http.get(customUrl,{headers: this.headers})
  }

  getCity(id:number): Observable<any>{
    let customUrl = this.url+'cities/'+id;
    return this.http.get(customUrl,{headers: this.headers});
  }

  createCity(dataForm:CityInterface): Observable<any>{
    let customUrl = this.url+'cities';
    return this.http.post(customUrl,dataForm,{headers: this.headers})
  }

  updateCity(dataForm:CityInterface, id:number): Observable<any>{
    let customUrl = this.url+'cities/'+id;
    return this.http.put(customUrl,dataForm,{headers: this.headers});
  }

  deleteCity(id:number): Observable<any>{
    let customUrl = this.url+'cities/'+id;
    return this.http.delete(customUrl,{headers: this.headers});
  }
}
