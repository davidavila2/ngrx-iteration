import { TestBed } from '@angular/core/testing';

import { NineService } from './nine.service';

describe('NineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NineService = TestBed.get(NineService);
    expect(service).toBeTruthy();
  });
});
