import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { OidcSecurityService, AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

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
          return this.router.parseUrl(this.pathPrefix('/unauthorised', next.url));
        }))
    }
    return of(isAuthenticated);
  }

  private isInRole(role: string | string[]): Observable<boolean> {
    if(typeof role === 'undefined' || role === null || role === '') {
      return of(true);
    }
    if(typeof role === 'object') {
      if(role.length === 0) {
        return of(true);
      }
      return this
          .oidcSecurityService
          .userData$
          .pipe(map(({ userData }) => {
            const roles: string[] = userData.roles;
            if(typeof roles !== 'undefined' && roles != null) {
              var matchedAll: boolean = true;
              role.forEach((strRole) => {
                if(!(typeof strRole === 'undefined' || strRole === null || strRole === '' || roles.indexOf(strRole))) {
                  matchedAll = false;
                }
              });
              return matchedAll;
            }
            return false;
          }));
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

  private pathPrefix(destination: string, url: UrlSegment[]): string {
    const fullUrl = url.map(u => u.path).join('/');
    if(!fullUrl.includes('/')) {
      return '.' + destination;
    }
    return '/' + url[0] + destination;
  }
}
