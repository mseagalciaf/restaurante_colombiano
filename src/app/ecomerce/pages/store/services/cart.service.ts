import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { ProductCartInterface } from '../interfaces/product-cart-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: ProductCartInterface[] = [];

  constructor(
    private encryptionService : EncryptionService
  ) { }

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
    this.products.splice(index,1);
    console.log(this.products);
    
  }


}
