import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { SetImageProductsService } from 'src/app/services/set-image-products.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MyProductsService } from '../../services/my-products.service';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-my-products-table',
  templateUrl: './my-products-table.component.html',
  styleUrls: ['./my-products-table.component.css']
})
export class MyProductsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image' ,'name', 'category_name', 'price','state'];
  dataSource: MatTableDataSource<ProductInterface>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productService : ProductService,
    private myProductService : MyProductsService,
    private setImageProduct : SetImageProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: HTMLInputElement) {
    const filterValue = event.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProducts(){
    let user:UserInterface = JSON.parse(localStorage.getItem('currentUser'));
    this.productService.getProductsFromSucursal(user.sucursale_id).pipe(
      map( resp => resp.data)
    ).subscribe(
      resp => {
        let data = this.setImageProduct.searchImage(resp);
        console.log(data);
        
        this.dataSource = new MatTableDataSource(data);
      },
      error => console.log(error)      
    )
  }

  changeState(event:MatSlideToggleChange,productId:number){
    let user:UserInterface = JSON.parse(localStorage.getItem(ConfigService.currentUserName));
    this.myProductService.changeStateProduct(user.sucursale_id,productId,event.checked).subscribe(
      resp => {
        console.log(resp);
        
        this.getProducts();
      },
      error => console.log(error)      
    )
    
  }
}
