import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { filter, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { SetImageProductsService } from 'src/app/services/set-image-products.service';
import { ProductCartInterface } from '../../interfaces/product-cart-interface';
import { CartService } from '../../services/cart.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})


export class CartModalComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator : MatPaginator;
  products:ProductInterface[];

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
      map( resp => resp.data )
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
      },
      error => console.log(error)      
    )
  }

  deleteCartProduct(index:number){
    this.cartService.deleteProduct(index);
    this.getCartProducts();
  }
}
