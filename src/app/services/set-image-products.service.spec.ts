import { TestBed } from '@angular/core/testing';

import { SetImageProductsService } from './set-image-products.service';

describe('SetImageProductsService', () => {
  let service: SetImageProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetImageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
