import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://mike.com/api_restaurante/public/api/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    let customUrl = this.url+'users';
    return this.http.get(customUrl,{headers:this.headers})
  }
}
