import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarMainComponent } from './top-navbar-main.component';

describe('TopNavbarMainComponent', () => {
  let component: TopNavbarMainComponent;
  let fixture: ComponentFixture<TopNavbarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavbarMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
