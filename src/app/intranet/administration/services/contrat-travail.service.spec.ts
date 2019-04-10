import { TestBed } from '@angular/core/testing';

import { ContratTravailService } from './contrat-travail.service';

describe('ContratTravailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContratTravailService = TestBed.get(ContratTravailService);
    expect(service).toBeTruthy();
  });
});
