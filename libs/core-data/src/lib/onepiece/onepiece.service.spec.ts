import { TestBed } from '@angular/core/testing';

import { OnepieceService } from './onepiece.service';

describe('OnepieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnepieceService = TestBed.get(OnepieceService);
    expect(service).toBeTruthy();
  });
});
