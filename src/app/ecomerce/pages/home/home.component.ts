import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';
import { CategoryInterface } from 'src/app/interfaces/category-inteface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CartModalComponent } from '../store/components/cart-modal/cart-modal.component';
import { CategoryService } from '../store/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url_images:string = ConfigService.URL_IMAGES;
  categories:CategoryInterface[];
  constructor(
    private categoryService : CategoryService,
    private authService : AuthServiceService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    if (this.authService.isForPay && this.authService.isLogined) {
      const ref = this.dialog.open(CartModalComponent,{
        width : "100%"
      });
      ref.componentInstance.divPay = true;
      this.authService.isForPay=false;
    }

  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      resp => {
        this.categories = resp.data;
        this.searchImage();
      },
      error => {
        console.log(error)        
      }
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
