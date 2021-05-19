import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config/config.service';
import { ResponseJsonInterface } from 'src/app/interfaces/response-json-interface';

@Injectable({
  providedIn: 'root'
})
export class MyProductsService {

  url:string=ConfigService.URL;
  headers:HttpHeaders = ConfigService.headers;
  constructor(
    private http : HttpClient
  ) { }

  changeStateProduct(sucursale:number,id:number,state:boolean):Observable<ResponseJsonInterface<string>>{
    let customUrl:string=`${this.url}sucursales/${sucursale}/products/${id}`;
    return this.http.put<ResponseJsonInterface<string>>(customUrl,{'activated':state},{headers: this.headers});
  }
}
