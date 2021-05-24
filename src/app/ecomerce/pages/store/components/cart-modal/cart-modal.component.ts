import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { filter, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { SetImageProductsService } from 'src/app/services/set-image-products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})


export class CartModalComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator : MatPaginator;
  products:ProductInterface[];
  total:number=0;

  constructor(
    private cartService : CartService,
    private setImageProduct : SetImageProductsService
  ) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  displayedColumns: string[] = ['image', 'name', 'modifiers', 'quantity','total','actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: HTMLInputElement) {
    this.dataSource.filter = event.value.trim().toLowerCase();
  } 

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  getCartProducts(){
    let localProducts: ProductInterface[] = JSON.parse(localStorage.getItem(ConfigService.productsName));
    let productIDs = localProducts.map( (product) => product.id);
    const uniqueProductIDs = new Set(productIDs);
    
    this.cartService.getValidatedProducts(ConfigService.currentSucursale,[...uniqueProductIDs]).pipe(
      map( resp => resp.data)
    ).subscribe(
      resp => {
        let products : ProductInterface[]= [];
        localProducts.forEach(element => {
          let apiFoundProduct:ProductInterface = resp.find( (product) => product.id ==element.id);
          element.name = apiFoundProduct.name;
          element.image = apiFoundProduct.image;
          products.push(element);
        });
        products = this.setImageProduct.searchImage(products);
        this.dataSource.data = products;
        products.forEach(product => {
          this.total =+ Number(product.total);
        });
      },
      error => console.log(error)      
    )
  }

  deleteCartProduct(index:number){
    this.cartService.deleteProduct(index);
    this.getCartProducts();
  }
}
