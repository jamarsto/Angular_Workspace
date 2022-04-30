import { TestBed } from '@angular/core/testing';

import { AutoLoginAllRoutesWithRoleGuard } from './lib1.service';

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
