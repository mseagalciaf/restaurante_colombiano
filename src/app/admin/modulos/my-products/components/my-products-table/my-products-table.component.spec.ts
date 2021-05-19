import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsTableComponent } from './my-products-table.component';

describe('MyProductsTableComponent', () => {
  let component: MyProductsTableComponent;
  let fixture: ComponentFixture<MyProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
