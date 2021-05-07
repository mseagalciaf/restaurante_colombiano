import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifierModalComponent } from './add-modifier-modal.component';

describe('AddModifierModalComponent', () => {
  let component: AddModifierModalComponent;
  let fixture: ComponentFixture<AddModifierModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModifierModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModifierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
