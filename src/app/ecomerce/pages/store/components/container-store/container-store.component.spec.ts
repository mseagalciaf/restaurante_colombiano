import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerStoreComponent } from './container-store.component';

describe('ContainerStoreComponent', () => {
  let component: ContainerStoreComponent;
  let fixture: ComponentFixture<ContainerStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
