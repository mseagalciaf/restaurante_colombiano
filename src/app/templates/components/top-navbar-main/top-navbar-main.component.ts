import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartModalComponent } from 'src/app/ecomerce/pages/store/components/cart-modal/cart-modal.component';

@Component({
  selector: 'app-top-navbar-main',
  templateUrl: './top-navbar-main.component.html',
  styleUrls: ['./top-navbar-main.component.css']
})
export class TopNavbarMainComponent implements OnInit {

  constructor(
    public dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCart(){
    this.dialog.open(CartModalComponent);
  }

}
