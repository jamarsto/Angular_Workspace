import { Route } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { shellPath } from '../shell-path/shell-path.function';
import { Module } from '../../types/module/module.type';


export function microFrontEndRoute(mfe: Module) : Route {
  // provided a role without a guard. Hence don't try to guard
  if(
      typeof mfe.guards === 'undefined'
      || mfe.guards === null
      || mfe.guards.length === 0
      || (mfe.guards.length > 0 && typeof mfe.guards[0] === 'string')) {
    return {
      matcher: shellPath(mfe.prefix),
      component: WebComponentWrapper,
      data: {
        type: 'module',
        remoteEntry: '/mfe/' + mfe.name + '/remoteEntry.js',
        exposedModule: './RemoteAppModule',
        elementName: 'mfe-' + mfe.name,
      } as WebComponentWrapperOptions
    }
  }
  // provided guard(s) without role(s).  Just do authorized check
  if(typeof mfe.roles === 'undefined'
      || mfe.roles === null
      || mfe.roles.length === 0) {
    return {
      matcher: shellPath(mfe.prefix),
      component: WebComponentWrapper,
      data: {
        type: 'module',
        remoteEntry: '/mfe/' + mfe.name + '/remoteEntry.js',
        exposedModule: './RemoteAppModule',
        elementName: 'mfe-' + mfe.name,
      } as WebComponentWrapperOptions, canLoad: mfe.guards, canActivate: mfe.guards, canActivateChild: mfe.guards
    }
  }
  // provided guard(s) and role(s). Do full check
  return {
    matcher: shellPath(mfe.prefix),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/' + mfe.name + '/remoteEntry.js',
      exposedModule: './RemoteAppModule',
      elementName: 'mfe-' + mfe.name,
      role: mfe.roles,
    } as WebComponentWrapperOptions, canLoad: mfe.guards, canActivate: mfe.guards, canActivateChild: mfe.guards
  }
}
