import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthOptions, AutoLoginAllRoutesGuard, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, of } from 'rxjs';

import { AutoLoginAllRoutesWithRoleGuard } from './all-routes-guard.service';

describe('AutoLoginAllRoutesWithRoleGuard', () => {
  let service: AutoLoginAllRoutesWithRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: OidcSecurityService,  useClass: OidcSecurityServiceMock },
        { provide: AutoLoginAllRoutesGuard, useClass: AutoLoginAllRoutesGuardMock }
      ]
    });
    service = TestBed.inject(AutoLoginAllRoutesWithRoleGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class OidcSecurityServiceMock {
  getToken() {
    return 'some_token';
  }
  checkAuth() {
    return of(true);
  }
  authorize(authOptions?: AuthOptions) {
    if (authOptions && authOptions.urlHandler) {
      return authOptions.urlHandler('http://localhost');
    } else {
      return null;
    }
  }
}

class AutoLoginAllRoutesGuardMock {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(true);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(true);
  }
  canLoad(route: Route, url: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(true);
  }
}
