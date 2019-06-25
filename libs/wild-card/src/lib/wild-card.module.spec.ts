import { async, TestBed } from '@angular/core/testing';
import { WildCardModule } from './wild-card.module';

describe('WildCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WildCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WildCardModule).toBeDefined();
  });
});
