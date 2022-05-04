import { TestBed } from '@angular/core/testing';

import { AutoLoginAllRoutesWithRoleGuard } from './all-routes-guard.service';

describe('AutoLoginAllRoutesWithRoleGuard', () => {
  let service: AutoLoginAllRoutesWithRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLoginAllRoutesWithRoleGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
