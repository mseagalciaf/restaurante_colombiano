import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleCategoriesComponent } from './bubble-categories.component';

describe('BubbleCategoriesComponent', () => {
  let component: BubbleCategoriesComponent;
  let fixture: ComponentFixture<BubbleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
