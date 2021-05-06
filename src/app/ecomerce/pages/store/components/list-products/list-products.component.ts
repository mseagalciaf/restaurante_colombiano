import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : ProductInterface[];

  constructor(
    private product : ProductService,
    private ngbModal : NgbModal
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.product.getAllProducts().subscribe(
      resp => {
        this.products= resp.data;
      },
      error => console.log(error)
    )
  }

  addProduct(id:number){
    const refModal = this.ngbModal.open(AddProductModalComponent, {centered: true, size: "lg"});
    refModal.componentInstance.id = id;
  }

}
