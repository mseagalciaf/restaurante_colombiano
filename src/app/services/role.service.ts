import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleInterface } from '../interfaces/role-interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roles:RoleInterface;
  url: string = "http://mike.com/api_restaurante/public/api/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  constructor(private http: HttpClient ) { }

  getAllRoles():Observable<any>{
    let customUrl = this.url+'roles';
    return this.http.get(customUrl,{headers: this.headers});
  }
}
