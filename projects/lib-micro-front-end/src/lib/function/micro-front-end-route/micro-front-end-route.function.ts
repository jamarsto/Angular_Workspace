import { Route } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { shellPath } from '../shell-path/shell-path.function';

export type MicroFrontEndRoute = { path: string, name: string, guards?: any[], roles?: string[] }

export function microFrontEndRoute(mfe: MicroFrontEndRoute) : Route {
  // provided a role without a guard. Hence don't try to guard
  if(
      typeof mfe.guards === 'undefined'
      || mfe.guards === null
      || mfe.guards.length === 0
      || (mfe.guards.length > 0 && typeof mfe.guards[0] === 'string')) {
    return {
      matcher: shellPath(mfe.path),
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
  if(typeof mfe.roles === 'undefined'
      || mfe.roles === null
      || mfe.roles.length === 0) {
    return {
      matcher: shellPath(mfe.path),
      component: WebComponentWrapper,
      data: {
        type: 'module',
        remoteEntry: '/mfe/' + name + '/remoteEntry.js',
        exposedModule: './RemoteAppModule',
        elementName: 'mfe-' + name,
      } as WebComponentWrapperOptions, canLoad: mfe.guards, canActivate: mfe.guards, canActivateChild: mfe.guards
    }
  }
  // provided guard(s) and role(s). Do full check
  return {
    matcher: shellPath(mfe.path),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/' + name + '/remoteEntry.js',
      exposedModule: './RemoteAppModule',
      elementName: 'mfe-' + name,
      role: mfe.roles,
    } as WebComponentWrapperOptions, canLoad: mfe.guards, canActivate: mfe.guards, canActivateChild: mfe.guards
  }
}
