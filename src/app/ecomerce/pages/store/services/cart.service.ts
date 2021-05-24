import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config/config.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ResponseJsonInterface } from 'src/app/interfaces/response-json-interface';
import { EncryptionService } from 'src/app/services/encryption.service';
import { ProductCartInterface } from '../interfaces/product-cart-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: ProductCartInterface[] = [];

  constructor(
    private http : HttpClient
  ) {
    
   }

  addProduct(product:ProductCartInterface){
    
    let productsLocal : string = localStorage.getItem(ConfigService.productsName);
    if (productsLocal) {
      this.products = JSON.parse(productsLocal);
      this.products.push(product);
      let localData = JSON.stringify(this.products);

      /* let encryptedData = this.encryptionService.encrypt(JSON.stringify(this.products)); */
      
      localStorage.setItem(ConfigService.productsName,localData);
    }else{
      this.products = [];
      this.products.push(product);
      let localData = JSON.stringify(this.products);
      /* let encryptedData = this.encryptionService.encrypt(JSON.stringify(this.products));
      let decryptedData = this.encryptionService.decrypt(encryptedData); */
      
      localStorage.setItem(ConfigService.productsName,localData);
    }
  }

  deleteProduct(index:number){
    let productsLocal : string = localStorage.getItem(ConfigService.productsName);
    if (productsLocal) {
      this.products = JSON.parse(productsLocal);
      this.products.splice(index,1);

      let localData = JSON.stringify(this.products);
      localStorage.setItem(ConfigService.productsName,localData);
    }
  }

  getValidatedProducts(sucursaleId:number,productIDs:number[]) :Observable<ResponseJsonInterface<ProductInterface[]>>{
    let customUrl = `${ConfigService.URL}cart/validateProducts/${sucursaleId}`;
    return this.http.post<ResponseJsonInterface<ProductInterface[]>>(customUrl,{products : productIDs },{headers: ConfigService.headers});
  }


}
