import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.css']
})
export class SidebarCategoryComponent implements OnInit {

  @Output() emittedCategory = new EventEmitter<number>();
  categories:CategoryInterface[];

  constructor(
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(
      resp => {
        this.categories = resp.data;
      },
      error => console.log(error)
      
    )
  }

  emitCategory(id:number){
    this.emittedCategory.emit(id);
  }
}
