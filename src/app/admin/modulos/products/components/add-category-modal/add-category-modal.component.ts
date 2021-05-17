import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'src/app/config/config.service';
import { CategoryService } from 'src/app/ecomerce/pages/store/services/category.service';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent implements OnInit {

  loadedImage:any;
  currentImage:any;
  url_images:string=ConfigService.URL_IMAGES;
  //-------Category to edit-------------
  @Input() isEdit:boolean=false;
  @Input() category_id:number=null; 

  public checkoutCategoryCreateForm = this.formBuilder.group({
    name : ['',Validators.required]
  });

  constructor(
    private formBuilder : FormBuilder,
    public activeModal : NgbActiveModal,
    private categoryService : CategoryService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if (this.category_id) {
      this.getCategory(this.category_id);
    }
  }

  getCategory(id:number){
    this.categoryService.getCategory(id).subscribe(
      resp => {
        this.checkoutCategoryCreateForm.controls['name'].setValue(resp.data.name);
        resp.data.image?this.currentImage=this.url_images+resp.data.image:this.currentImage='assets/icons/icons-categories/default.jpg';
      },
      error => console.log(error)      
    )
  }

  createCategory(dataForm:CategoryInterface){
    dataForm.image = this.loadedImage;
    this.categoryService.createCategory(dataForm).subscribe(
      resp => {
        this.activeModal.close("se cerró");
      },
      error => console.log(error)      
    )

  }

  editCategory(dataForm:CategoryInterface, id:number = this.category_id){
    this.loadedImage?dataForm.image=this.loadedImage:null;
    this.categoryService.updateCategory(dataForm,id).subscribe(
      resp => {
        this.activeModal.close();
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
