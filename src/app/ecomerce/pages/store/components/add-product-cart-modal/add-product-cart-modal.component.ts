import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
import { ModifierInterface } from 'src/app/interfaces/modifier-interface';
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

  @Input() id?:number;
  url_images=ConfigService.URL_IMAGES;
  product: ProductInterface;
  quantityControl : FormControl = new FormControl(1);
  quantity:number = this.quantityControl.value;
  checkoutModifersForm:FormGroup;
  total:number;

  constructor(
    public formBuilder : FormBuilder,
    private productService : ProductService,
    private cartService : CartService,
    public dialog : MatDialog
  ) { 
  }

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  createForm(product){
    this.checkoutModifersForm = this.formBuilder.group(
      {
        modifiers : this.formBuilder.array(
          //Se devuelve un array
          product.groups.map(()=>new FormControl('',Validators.required))
        ),
      }
    )
  }

  getProduct(id:number){
    this.productService.getProduct(id).pipe(
      map( (resp) => resp.data)
    ).subscribe(
      resp => {
        this.createForm(resp);     
        this.product = resp;
        this.product.image? this.product.image = `${this.url_images}${this.product.image}`
        : 'assets/icons/icons-categories/default.jpg';
        this.total = Number(this.product.price); 
        console.log(this.product);
      },
      error => console.log(error)
    )
  }

  addToCart(modifiersForm:ModifierInterface[]){
    let total :string = (Number(this.product.price)*this.quantity).toString();
    let chosenProduct : ProductCartInterface={
      id : this.product.id,
      modifiers : modifiersForm,
      quantity : this.quantity,
      total : total
    };
    this.cartService.addProduct(chosenProduct);
    this.dialog.closeAll();
  }

  addquantity(){
    this.quantity++;
  }

  reducequantity(){
    this.quantity--;
  }
}
