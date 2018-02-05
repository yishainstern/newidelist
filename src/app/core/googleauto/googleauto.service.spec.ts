import { TestBed, inject } from '@angular/core/testing';

import { GoogleautoService } from './googleauto.service';

describe('GoogleautoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleautoService]
    });
  });

  it('should be created', inject([GoogleautoService], (service: GoogleautoService) => {
    expect(service).toBeTruthy();
  }));
});
