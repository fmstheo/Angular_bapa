import { TestBed } from '@angular/core/testing';

import { PersonnelService } from './personnel.service';

describe('PersonnelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonnelService = TestBed.get(PersonnelService);
    expect(service).toBeTruthy();
  });
});
