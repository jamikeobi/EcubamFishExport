import { TestBed } from '@angular/core/testing';

import { LagosFishService } from './lagos-fish.service';

describe('LagosFishService', () => {
  let service: LagosFishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LagosFishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
