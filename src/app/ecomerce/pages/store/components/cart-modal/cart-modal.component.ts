import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { SaleService } from 'src/app/services/sale.service';
import { SetImageProductsService } from 'src/app/services/set-image-products.service';
import { SaleInterface } from '../../interfaces/sale-interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})


export class CartModalComponent implements OnInit {
  
  @Input() divPay:boolean=false;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  products:ProductInterface[];
  total:number=0;
  checkoutSaleForm = this.formBuilder.group({
    phone : ['',Validators.compose([Validators.required,Validators.minLength(10)])],
    shipping_address : ['',Validators.required],
    observations : ['']
  });

  constructor(
    private cartService : CartService,
    private setImageProduct : SetImageProductsService,
    private authService : AuthServiceService,
    private router : Router,
    private dialog : MatDialog,
    private formBuilder : FormBuilder,
    private saleService : SaleService
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
        this.total=0;
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
          this.total += Number(product.total);
        });
      },
      error => console.log(error)      
    )
  }

  deleteCartProduct(index:number){
    this.cartService.deleteProduct(index);
    this.getCartProducts();
  }

  goToPay(){
    if (this.authService.isLogined()) {
      this.divPay=true;
    }else{
      this.authService.isForPay=true;
      this.router.navigate(['/auth']);
      this.dialog.closeAll();
    }
  }

  pay(dataForm:SaleInterface){
    let user = this.authService.getCurrentUser();
    dataForm.sucursale_id=ConfigService.currentSucursale;
    dataForm.user_id = user.id;
    dataForm.total = this.total.toString();
    console.log(dataForm);
    this.saleService.createSale(dataForm).subscribe(
      resp => {
        console.log(resp);
      },
      error => console.log(error)      
    )
  }
}
