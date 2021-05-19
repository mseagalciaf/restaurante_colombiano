import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class SetImageProductsService {

  url_images:string = ConfigService.URL_IMAGES;

  constructor() { }

  searchImage(products:ProductInterface[]){
    products = products.map((product) => {
      return {
        ...product,
        image: product.image
          ? `${this.url_images}${product.image}`
          : 'assets/icons/icons-categories/default.jpg',
      };
    });
    return products
  }
}
