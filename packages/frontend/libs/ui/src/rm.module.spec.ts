import { TestBed } from '@angular/core/testing';

import { RmModule } from './rm.module';

describe('RmModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RmModule],
    });
  });

  it('should create', () => {
    const rmModule = TestBed.inject(RmModule);
    expect(rmModule).toBeTruthy();
  });
});
