import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCartModalComponent } from './add-product-cart-modal.component';

describe('AddProductCartModalComponent', () => {
  let component: AddProductCartModalComponent;
  let fixture: ComponentFixture<AddProductCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
