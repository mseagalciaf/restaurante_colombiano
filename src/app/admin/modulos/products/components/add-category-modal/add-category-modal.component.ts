import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/ecomerce/pages/store/services/category.service';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent implements OnInit {

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
        this.checkoutCategoryCreateForm.controls['name'].setValue(resp.data.name);
      },
      error => console.log(error)      
    )
  }

  createCategory(dataForm:CategoryInterface){
    this.categoryService.createCategory(dataForm).subscribe(
      resp => {
        this.activeModal.close("se cerró");
      },
      error => console.log(error)      
    )
  }

  editCategory(dataForm:CategoryInterface, id:number = this.category_id){
    this.categoryService.updateCategory(dataForm,id).subscribe(
      resp => {
        this.activeModal.close();
      },
      error => console.log(error)      
    )
  }

}
