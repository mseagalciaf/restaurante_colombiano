import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/ecomerce/pages/store/services/category.service';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  isLoading:boolean;
  categories: CategoryInterface[];

  constructor(
    private categoryService : CategoryService,
    private ngbModal : NgbModal
  ) { 
    this.isLoading=true;
    this.getAllCategories();
  }

  ngOnInit(): void {
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      resp => {
        this.isLoading=false;
        this.categories = resp.data;
      },
      error => console.log(error)
    )
  }

  addCategory(){
    const ref = this.ngbModal.open(AddCategoryModalComponent);
    ref.closed.subscribe(resp=>this.getAllCategories()
    );
    ref.dismissed.subscribe(resp=>this.getAllCategories()
    );
  }

  editCategory(id:number){
    const ref = this.ngbModal.open(AddCategoryModalComponent);
    ref.componentInstance.isEdit = true;
    ref.componentInstance.category_id = id;
    ref.closed.subscribe(resp=>this.getAllCategories()
    );
    ref.dismissed.subscribe(resp=>this.getAllCategories()
    );
    
  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id).subscribe(
      resp => {
        this.getAllCategories();
      },
      error => console.log(error)
    )
  }

}
