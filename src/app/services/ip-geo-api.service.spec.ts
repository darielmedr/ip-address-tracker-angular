import { TestBed } from '@angular/core/testing';

import { IpGeoApiService } from './ip-geo-api.service';

describe('IpGeoApiService', () => {
  let service: IpGeoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpGeoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
