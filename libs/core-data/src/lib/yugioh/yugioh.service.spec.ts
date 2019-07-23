import { TestBed } from '@angular/core/testing';

import { YugiohService } from './yugioh.service';

describe('YugiohService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YugiohService = TestBed.get(YugiohService);
    expect(service).toBeTruthy();
  });
});
