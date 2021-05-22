import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { AddProductCartModalComponent } from '../add-product-cart-modal/add-product-cart-modal.component';
import { filter, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  currentSucursale=ConfigService.currentSucursale;
  products : ProductInterface[];
  chosenCategory:number;

  constructor(
    private productService : ProductService,
    private ngbModal : NgbModal
  ) {
   }

  ngOnInit(): void {
    ConfigService.selectedSucursale.subscribe( sucursaleId => {
      this.getListProducts(sucursaleId);
    });
  }

  getListProducts(sucursalId:number){
    this.productService.getProductsFromSucursal(sucursalId).pipe(
      map(resp => resp.data)
    ).subscribe(
        resp => {
          this.chosenCategory?this.products= resp.filter(product => product.category_id==this.chosenCategory):this.products=resp;
          
        },
        error => console.log(error)
      )
  }


  addProduct(id:number){
    const refModal = this.ngbModal.open(AddProductCartModalComponent, {centered: true, size: "lg"});
    refModal.componentInstance.id = id;
  }

  selectedCategory(categoryId:number){
    this.chosenCategory = categoryId;
    ConfigService.selectedSucursale.next(ConfigService.currentSucursale);
  }

}
