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

  constructor(
    private product : ProductService,
    private ngbModal : NgbModal
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.currentSucursal.subscribe( sucursalId => {
      this.product.getProductsFromSucursal(sucursalId).pipe(
        map(data => data.data)
      ).subscribe(
        data => {
          console.log(data);
          
          this.products= data;
        },
        error => console.log(error)
      )
    })
  }

  addProduct(id:number){
    const refModal = this.ngbModal.open(AddProductCartModalComponent, {centered: true, size: "lg"});
    refModal.componentInstance.id = id;
  }

}
