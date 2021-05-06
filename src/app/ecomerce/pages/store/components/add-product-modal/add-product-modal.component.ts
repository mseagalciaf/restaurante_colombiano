import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {

  @Input() id:number;
  product: ProductInterface;

  constructor(
    public activeModal : NgbActiveModal,
    private productService : ProductService
  ) { 
  }

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(id:number){
    this.productService.getProduct(id).subscribe(
      resp => {
        this.product = resp.data;
        console.log(this.product);
        
      },
      error => console.log(error)
    )
  }

}
