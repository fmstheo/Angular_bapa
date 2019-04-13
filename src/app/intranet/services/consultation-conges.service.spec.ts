import { TestBed } from '@angular/core/testing';

import { ConsultationCongesService } from './consultation-conges.service';

describe('ConsultationCongesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultationCongesService = TestBed.get(ConsultationCongesService);
    expect(service).toBeTruthy();
  });
});
