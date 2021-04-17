import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

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

  getUSer(id:number): Observable<any>{
    let customUrl = this.url+'users/'+id;
    return this.http.get(customUrl,{headers: this.headers});
  }

  createUser(dataForm:UserInterface): Observable<any>{
    let customUrl = this.url+'users';
    return this.http.post(customUrl,dataForm,{headers:this.headers})
  }

  updateUser(dataForm:UserInterface,id:number): Observable<any>{
    let customUrl = this.url+'users/'+id;
    return this.http.put(customUrl,dataForm,{headers: this.headers})
  }

  deleteUser(id:number):Observable<any>{
    let customUrl = this.url+'users/'+id;
    return this.http.delete(customUrl,{headers: this.headers})
  }
}
