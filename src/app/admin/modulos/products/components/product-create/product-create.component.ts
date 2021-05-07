import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { GroupInterface } from 'src/app/interfaces/group-interface';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  isLoading:boolean = false;
  isEdit:boolean;
  product_id:number;
  categories: Array<CategoryInterface>;
  groups: Array<GroupInterface>;
  myGroups: Array<number>;

  public checkoutProductCreateForm = this.builderForm.group({
    name : ['', Validators.required],
    price : ['', Validators.required],
    category_id : ['', Validators.required],
    groups : ['', Validators.required]
  })


  constructor(
    private builderForm : FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private productService : ProductService
  ) { 
    this.getCategories();
    this.getGroups();
    if (this.product_id=this.route.snapshot.params.id) {
      this.isEdit=true;
      this.isLoading=true;
      this.getProduct(this.product_id);
    }
  }

  ngOnInit(): void {
  }

  getProduct(id:number){
    this.productService.getProduct(id).subscribe(
      resp => {
        this.isLoading=false;
        this.checkoutProductCreateForm.controls['name'].setValue(resp.data.name);
        this.checkoutProductCreateForm.controls['price'].setValue(resp.data.price);
        this.checkoutProductCreateForm.controls['category_id'].setValue(resp.data.category_id);
        this.myGroups=resp.data.groups;
      }
    )
  }

  createProduct(dataForm:ProductInterface){
    if (this.checkoutProductCreateForm.valid) {
      this.productService.createProduct(dataForm).subscribe(
        resp => {
          this.router.navigate(['admin/products/products']);
        },
        error => console.log(error)        
      )
    }else{

    }
  }

  editProduct(dataForm:ProductInterface,id:number = this.product_id){
    if (this.checkoutProductCreateForm.valid) {
      this.productService.updateProduct(dataForm,id).subscribe(
        resp => {
          this.router.navigate(['admin/products/products'])
        },
        error => console.log(error)        
      )
    }
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      resp => {
        this.router.navigate(['admin/products/product']);
      }
    )
  }

  getCategories(){
    this.productService.getAllCategories().subscribe(
      resp => {
        this.categories=resp.data;
      },
      error => console.log(error)
      
    )
  }

  getGroups(){
    this.productService.getAllGroups().subscribe(
      resp => {
        this.groups=resp.data
      },
      error => console.log(error)      
    )
  }

}
