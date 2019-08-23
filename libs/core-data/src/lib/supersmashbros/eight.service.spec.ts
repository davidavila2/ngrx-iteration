import { TestBed } from '@angular/core/testing';

import { EightService } from './eight.service';

describe('EightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EightService = TestBed.get(EightService);
    expect(service).toBeTruthy();
  });
});
