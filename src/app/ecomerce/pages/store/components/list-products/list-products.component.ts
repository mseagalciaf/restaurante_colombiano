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

  currentSucursal=ConfigService.selectedSucursale;
  products : ProductInterface[];
  chosenCategory:number;

  constructor(
    private productService : ProductService,
    private ngbModal : NgbModal
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.currentSucursal.subscribe( sucursalId => {

      this.productService.getProductsFromSucursal(sucursalId).pipe(
        map(resp => resp.data),
        
      ).subscribe(
        resp => {
          this.chosenCategory? this.products= resp.filter(product => product.category_id==this.chosenCategory):this.products=resp;
          console.log(this.products);
          
        },
        error => console.log(error)
      )
    })
  }

  addProduct(id:number){
    const refModal = this.ngbModal.open(AddProductCartModalComponent, {centered: true, size: "lg"});
    refModal.componentInstance.id = id;
  }

  selectedCategory(categoryId:number){
    this.chosenCategory = categoryId;
    this.getProducts();
  }

}
