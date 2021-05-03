import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.css']
})
export class SidebarCategoryComponent implements OnInit {

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
}
