import { TestBed } from '@angular/core/testing';

import { AutoLoginPartialRoutesWithRoleGuard } from './partial-routes-guard.service';

describe('AutoLoginPartialRoutesWithRoleGuard', () => {
  let service: AutoLoginPartialRoutesWithRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLoginPartialRoutesWithRoleGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
