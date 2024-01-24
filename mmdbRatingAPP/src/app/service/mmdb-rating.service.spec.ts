import { TestBed } from '@angular/core/testing';

import { MmdbRatingService } from './mmdb-rating.service';

describe('MmdbRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MmdbRatingService = TestBed.get(MmdbRatingService);
    expect(service).toBeTruthy();
  });
});
