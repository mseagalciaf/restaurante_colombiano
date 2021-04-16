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
}
