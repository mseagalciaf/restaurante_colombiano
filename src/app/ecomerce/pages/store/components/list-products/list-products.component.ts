import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { AddProductCartModalComponent } from '../add-product-cart-modal/add-product-cart-modal.component';
import { filter, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { SetImageProductsService } from 'src/app/services/set-image-products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : ProductInterface[];
  chosenCategory:number;

  constructor(
    private productService : ProductService,
    private ngbModal : NgbModal,
    private setImageProduct : SetImageProductsService
  ) {
   }

  ngOnInit(): void {
    ConfigService.selectedSucursale.subscribe( sucursaleId => {
      this.getListProducts(sucursaleId);
    });
    if (ConfigService.currentSucursale) {
      ConfigService.setselectedSucursale(ConfigService.currentSucursale);
    }
  }

  getListProducts(sucursalId:number){
    this.productService.getProductsFromSucursal(sucursalId).pipe(
      map(resp => resp.data),
    ).subscribe(
        resp => {
          let data = this.setImageProduct.searchImage(resp);
          this.products=data.filter((product)=>product.pivot.activated===1);
          this.chosenCategory?this.products= this.products.filter(product => product.category_id==this.chosenCategory):null;
          console.log(this.products);
          
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
