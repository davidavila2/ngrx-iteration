import { TestBed } from '@angular/core/testing';

import { SomethingService } from './something.service';

describe('SomethingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomethingService = TestBed.get(SomethingService);
    expect(service).toBeTruthy();
  });
});
