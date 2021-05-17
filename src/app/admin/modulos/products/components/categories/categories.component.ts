import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'src/app/config/config.service';
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
  url_images=ConfigService.URL_IMAGES;

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
        this.searchImage();
      },
      error => console.log(error)
    )
  }

  searchImage(){
    this.categories = this.categories.map((category) => {
      return {
        ...category,
        image: category.image
          ? `${this.url_images}${category.image}`
          : 'assets/icons/icons-categories/default.jpg',
      };
    });
    
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
    ref.closed.subscribe(resp=>this.getAllCategories() );
    ref.dismissed.subscribe(resp=>this.getAllCategories() );
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
