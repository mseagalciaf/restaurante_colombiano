import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : ProductInterface;
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
        this.products=resp.data;       
      },
      error => console.log(error)      
    )
  }

  editProduct(id:number){
    this.router.navigate(['admin/products/product/edit/',id]);
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      resp => {
        this.getAll();
      },
      error => console.log(error)      
    )
  }



}
