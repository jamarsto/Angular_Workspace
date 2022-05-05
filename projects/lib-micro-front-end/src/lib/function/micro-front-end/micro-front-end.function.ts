import { Route } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { shellPath } from '../shell-path/shell-path.function';

export function microFrontEnd(path: string, name: string, guard?: any[], roles?: string[] | string) : Route {
  // provided a role without a guard. Hence don't try to guard
  if(
      typeof guard === 'undefined'
      || guard === null
      || guard.length === 0
      || (guard.length > 0 && typeof guard[0] === 'string')) {
    return {
      matcher: shellPath(path),
      component: WebComponentWrapper,
      data: {
        type: 'module',
        remoteEntry: '/mfe/' + name + '/remoteEntry.js',
        exposedModule: './RemoteAppModule',
        elementName: 'mfe-' + name,
      } as WebComponentWrapperOptions
    }
  }
  // provided guard(s) without role(s).  Just do authorized check
  if(typeof roles === 'undefined'
      || roles === null
      || (typeof roles === 'string' && roles.trim() === '')
      || (Array.isArray(roles) && roles.length === 0)) {
    return {
      matcher: shellPath(path),
      component: WebComponentWrapper,
      data: {
        type: 'module',
        remoteEntry: '/mfe/' + name + '/remoteEntry.js',
        exposedModule: './RemoteAppModule',
        elementName: 'mfe-' + name,
      } as WebComponentWrapperOptions, canLoad: guard, canActivate: guard, canActivateChild: guard
    }
  }
  // provided guard(s) and role(s). Do full check
  return {
    matcher: shellPath(path),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/' + name + '/remoteEntry.js',
      exposedModule: './RemoteAppModule',
      elementName: 'mfe-' + name,
      role: roles,
    } as WebComponentWrapperOptions, canLoad: guard, canActivate: guard, canActivateChild: guard
  }
}

