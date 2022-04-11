import {TestBed} from '@angular/core/testing';

import {TraintripService} from './traintrip.service';

describe('TraintripService', () => {
  let service: TraintripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraintripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
