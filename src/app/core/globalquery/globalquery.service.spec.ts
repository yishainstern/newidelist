import { TestBed, inject } from '@angular/core/testing';

import { GlobalqueryService } from './globalquery.service';

describe('GlobalqueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalqueryService]
    });
  });

  it('should be created', inject([GlobalqueryService], (service: GlobalqueryService) => {
    expect(service).toBeTruthy();
  }));
});
