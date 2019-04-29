import { TestBed } from '@angular/core/testing';

import { CongesdevjuniorService } from './congesdevjunior.service';

describe('CongesdevjuniorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongesdevjuniorService = TestBed.get(CongesdevjuniorService);
    expect(service).toBeTruthy();
  });
});
