import { TestBed } from '@angular/core/testing';

import { DevjuniorService } from './devjunior.service';

describe('DevjuniorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevjuniorService = TestBed.get(DevjuniorService);
    expect(service).toBeTruthy();
  });
});
