import { TestBed, async, inject } from '@angular/core/testing';

import { LibGuard } from './lib.guard';

describe('LibGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibGuard]
    });
  });

  it('should ...', inject([LibGuard], (guard: LibGuard) => {
    expect(guard).toBeTruthy();
  }));
});
