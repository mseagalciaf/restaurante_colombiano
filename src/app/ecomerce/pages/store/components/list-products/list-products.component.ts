import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : ProductInterface[];

  constructor(
    private product : ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.product.getAllProducts().subscribe(
      resp => {
        this.products= resp.data;
        console.log(this.products);
        
      },
      error => console.log(error)
    )
  }
}
