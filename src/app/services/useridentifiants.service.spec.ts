import { TestBed } from '@angular/core/testing';

import { UseridentifiantsService } from './useridentifiants.service';

describe('UseridentifiantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseridentifiantsService = TestBed.get(UseridentifiantsService);
    expect(service).toBeTruthy();
  });
});
