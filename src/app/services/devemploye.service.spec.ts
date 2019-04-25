import { TestBed } from '@angular/core/testing';

import { DevemployeService } from './devemploye.service';

describe('DevemployeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevemployeService = TestBed.get(DevemployeService);
    expect(service).toBeTruthy();
  });
});
