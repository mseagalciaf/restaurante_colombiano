import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config/config.service';
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
  url_images=ConfigService.URL_IMAGES;
  isLoading:boolean = false;
  isEdit:boolean;
  product_id:number;
  categories: Array<CategoryInterface>;
  groups: Array<GroupInterface>;
  myGroups: GroupInterface[];
  currentImage:string;
  loadedImage:any;

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
    this.productService.getProduct(id).pipe(
      map( (resp) => resp.data)
    ).subscribe(
      resp => {
        this.isLoading=false;
        this.checkoutProductCreateForm.controls['name'].setValue(resp.name);
        this.checkoutProductCreateForm.controls['price'].setValue(resp.price);
        this.checkoutProductCreateForm.controls['category_id'].setValue(resp.category_id);
        resp.image?this.currentImage=this.url_images+resp.image:this.currentImage='assets/icons/icons-categories/default.jpg';
        this.myGroups=resp.groups;
      }
    )
  }

  createProduct(dataForm:ProductInterface){
    dataForm.image = this.loadedImage;
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
    this.loadedImage?dataForm.image=this.loadedImage:null;
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

  changedFile(event){
    let [file] = event.target.files;

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e)=>{
      var buffer = reader.result
      this.loadedImage=buffer;
    }
  }

}
