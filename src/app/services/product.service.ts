import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';
import { ResponseJsonInterface } from '../interfaces/response-json-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string="http://mike.com/api_restaurante/public/api/";
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<any>{
    let customUrl = this.url+'products';
    return this.http.get(customUrl,{headers: this.headers});
  }

  getProductsFromSucursal(id:number): Observable<ResponseJsonInterface<ProductInterface[]>>{
    let customUrl = `${this.url}sucursales/${id}/products`;
    return this.http.get<ResponseJsonInterface<ProductInterface[]>>(customUrl, {headers: this.headers});
  }

  getProduct(id:number): Observable<any>{
    let customUrl = this.url+'products/'+id;
    return this.http.get<ProductInterface>(customUrl,{headers: this.headers});
  }

  createProduct(dataForm:ProductInterface): Observable<any>{
    let customUrl = this.url+'products';
    return this.http.post(customUrl,dataForm,{headers: this.headers})
  }

  updateProduct(dataForm:ProductInterface, id: number): Observable<any>{
    let customUrl = this.url+'products/'+id;
    return this.http.put(customUrl,dataForm,{headers: this.headers})
  }

  deleteProduct(id:number): Observable<any>{
    let customUrl = this.url+'products/'+id;
    return this.http.delete(customUrl,{headers: this.headers})
  }

  getAllCategories(): Observable<any>{
    let customUrl = this.url+'categories';
    return this.http.get(customUrl,{headers: this.headers});
  }

  getAllGroups(): Observable<any>{
    let customUrl = this.url+'groups';
    return this.http.get(customUrl,{headers: this.headers});
  }
}

