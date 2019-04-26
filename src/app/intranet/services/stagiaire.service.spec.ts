import { TestBed } from '@angular/core/testing';

import { StagiaireService } from './stagiaire.service';

describe('StagiaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagiaireService = TestBed.get(StagiaireService);
    expect(service).toBeTruthy();
  });
});
