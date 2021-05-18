import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  url_images=ConfigService.URL_IMAGES;
  isLoading:boolean=true;
  products : ProductInterface[];
  constructor(
    private router : Router,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAllProducts().subscribe(
      resp => {
        this.isLoading=false;
        this.products=resp.data; 
        this.searchImage();      
      },
      error => console.log(error)      
    )
  }

  editProduct(id:number){
    this.router.navigate(['admin/products/products/edit/',id]);
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      resp => {
        console.log(resp);
        
        this.getAll();
      },
      error => console.log(error)      
    )
  }

  searchImage(){
    this.products = this.products.map((product) => {
      return {
        ...product,
        image: product.image
          ? `${this.url_images}${product.image}`
          : 'assets/icons/icons-categories/default.jpg',
      };
    });
  }

}
