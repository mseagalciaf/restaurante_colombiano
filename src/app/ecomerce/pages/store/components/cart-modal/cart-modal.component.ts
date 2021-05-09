import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})


export class CartModalComponent implements OnInit {

  constructor(
    public activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }


}
