import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config/config.service';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string=ConfigService.URL;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    private http : HttpClient
  ) { }

  createCategory(dataForm:CategoryInterface) : Observable<any>{
    let url = this.url+'categories';
    return this.http.post(url,dataForm,{headers:this.headers});
  }

  getAllCategories(): Observable<any>{
    let url = this.url+'categories';
    return this.http.get(url,{headers: this.headers})
  }

  getCategory(id:number): Observable<any>{
    let url = this.url+'categories/'+id;
    return this.http.get<CategoryInterface>(url,{headers : this.headers});
  }

  updateCategory(dataForm:CategoryInterface, id : number) : Observable<any>{
    let url = this.url+'categories/'+id;
    return this.http.put(url,dataForm,{headers: this.headers});
  }

  deleteCategory(id:number): Observable<any>{
    let url = this.url+'categories/'+id;
    return this.http.delete(url,{headers:this.headers});
  }


}
