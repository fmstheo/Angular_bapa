import { TestBed } from '@angular/core/testing';

import { IntranetService } from './intranet.service';

describe('IntranetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntranetService = TestBed.get(IntranetService);
    expect(service).toBeTruthy();
  });
});
