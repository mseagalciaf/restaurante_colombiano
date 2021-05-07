import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-cart-modal',
  templateUrl: './add-product-cart-modal.component.html',
  styleUrls: ['./add-product-cart-modal.component.css']
})
export class AddProductCartModalComponent implements OnInit {

  @Input() id:number;
  product: ProductInterface;
  amount:number=1;

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

  addToCart(){
  }

  addAmount(){
    this.amount++;
  }

  reduceAmount(){
    this.amount--;
  }
}
