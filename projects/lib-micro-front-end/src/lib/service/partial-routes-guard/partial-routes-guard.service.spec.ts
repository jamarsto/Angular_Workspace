import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthOptions, AutoLoginPartialRoutesGuard, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, of } from 'rxjs';

import { AutoLoginPartialRoutesWithRoleGuard } from './partial-routes-guard.service';

describe('AutoLoginPartialRoutesWithRoleGuard', () => {
  let service: AutoLoginPartialRoutesWithRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: OidcSecurityService,  useClass: OidcSecurityServiceMock },
        { provide: AutoLoginPartialRoutesGuard, useClass: AutoLoginPartialRoutesGuardMock }
      ]
    });
    service = TestBed.inject(AutoLoginPartialRoutesWithRoleGuard);
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

class AutoLoginPartialRoutesGuardMock {
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
