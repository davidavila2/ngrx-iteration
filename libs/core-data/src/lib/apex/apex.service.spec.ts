import { TestBed } from '@angular/core/testing';

import { TenService } from './apex.service';

describe('TenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenService = TestBed.get(TenService);
    expect(service).toBeTruthy();
  });
});
