import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { SetImageProductsService } from 'src/app/services/set-image-products.service';
import { ProductCartInterface } from '../../interfaces/product-cart-interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-product-cart-modal',
  templateUrl: './add-product-cart-modal.component.html',
  styleUrls: ['./add-product-cart-modal.component.css']
})
export class AddProductCartModalComponent implements OnInit {

  @Input() id:number;
  url_images=ConfigService.URL_IMAGES;
  product: ProductInterface;
  quantityControl : FormControl = new FormControl(1);
  quantity:number = this.quantityControl.value;
  checkoutModifersForm = this.formBuilder.group({
    modifier : ['',Validators.required]
  });
  total:number;

  constructor(
    public activeModal : NgbActiveModal,
    private formBuilder : FormBuilder,
    private productService : ProductService,
    private cartService : CartService,
    private setImageProduct : SetImageProductsService
  ) { 
  }

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(id:number){
    this.productService.getProduct(id).pipe(
      map( (resp) => resp.data)
    ).subscribe(
      resp => {
        this.product = resp;
        this.product.image? this.product.image = `${this.url_images}${this.product.image}`
        : 'assets/icons/icons-categories/default.jpg';
        this.total = Number(this.product.price);         
      },
      error => console.log(error)
    )
  }

  addToCart(){
    let total :string = (Number(this.product.price)*this.quantity).toString();
    let chosenProduct : ProductCartInterface={
      id : this.product.id,
      modifiers : [1,1],
      quantity : this.quantity,
      total : total
    };

    this.cartService.addProduct(chosenProduct);
  }

  addquantity(){
    this.quantity++;
  }

  reducequantity(){
    this.quantity--;
  }
}
