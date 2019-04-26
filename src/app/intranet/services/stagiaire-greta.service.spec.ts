import { TestBed } from '@angular/core/testing';

import { StagiaireGretaService } from './stagiaire-greta.service';

describe('StagiaireGretaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagiaireGretaService = TestBed.get(StagiaireGretaService);
    expect(service).toBeTruthy();
  });
});
