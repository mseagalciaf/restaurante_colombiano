import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { SaleInterface } from '../ecomerce/pages/store/interfaces/sale-interface';
import { ResponseJsonInterface } from '../interfaces/response-json-interface';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private http : HttpClient
  ) { }

  createSale(dataForm:SaleInterface) :Observable<ResponseJsonInterface<any>>{
    let customUrl = `${ConfigService.URL}sales`;
    return this.http.post<ResponseJsonInterface<any>>(customUrl,dataForm,{headers: ConfigService.headers});
  }
}
