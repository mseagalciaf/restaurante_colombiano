import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-bubble-categories',
  templateUrl: './bubble-categories.component.html',
  styleUrls: ['./bubble-categories.component.css']
})
export class BubbleCategoriesComponent implements OnInit {

  url_images:string = ConfigService.URL_IMAGES;
  categories: CategoryInterface[];

  constructor(
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(
      resp => {
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

}
