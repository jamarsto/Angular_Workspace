import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { OidcSecurityService, AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { pathPrefix } from './lib1.function';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginAllRoutesWithRoleGuard implements CanActivate, CanActivateChild,CanLoad {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router,
    private autoLoginAllRoutesGuard: AutoLoginAllRoutesGuard
  ) { }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this
        .autoLoginAllRoutesGuard
        .canActivate(next, state)
        .pipe(mergeMap(result => this.checkRole(result, next)));
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this
        .autoLoginAllRoutesGuard
        .canActivateChild(next, state)
        .pipe(mergeMap(result => this.checkRole(result, next)));
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this
        .autoLoginAllRoutesGuard
        .canLoad();
  }

  private checkRole(isAuthenticated: boolean | UrlTree, next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    if(typeof isAuthenticated !== 'boolean') {
      return of(isAuthenticated);
    }
    if(isAuthenticated === true) {
      return this
        .isInRole(next.data['role'])
        .pipe(map(isInRole => {
          if(isInRole === true) {
            return true;
          }
          return this.router.parseUrl(pathPrefix('/unauthorised', next.url));
        }))
    }
    return of(isAuthenticated);
  }

  private isInRole(role: string): Observable<boolean> {
    if(typeof role === 'undefined' || role === '') {
      return of(true);
    }
    return this
        .oidcSecurityService
        .userData$
        .pipe(map(({ userData }) => {
          const roles: string[] = userData.roles;
          if(typeof roles !== 'undefined' && roles != null && roles.indexOf(role) >= 0) {
            return true;
          }
          return false;
        }));
  }
}
