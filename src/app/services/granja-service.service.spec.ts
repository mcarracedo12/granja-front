import { TestBed } from '@angular/core/testing';

import { GranjaServiceService } from './granja-service.service';

describe('GranjaServiceService', () => {
  let service: GranjaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GranjaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
