import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string="http://mike.com/api_restaurante/public/api/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    private http : HttpClient
  ) { }

  getAllCategories(): Observable<any>{
    let url = this.url+'categories';
    return this.http.get(url,{headers: this.headers})
  }



}
