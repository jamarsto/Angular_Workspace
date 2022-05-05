import { Route } from '@angular/router';
import { modulePath } from '../module-path/module-path.function';

export type ModuleRoute = { component: any, guards?: any[], roles?: string[], children: Route[] }

export function moduleRoute(moduleRoute: ModuleRoute) : Route {
  // provided a role without a guard. Hence don't try to guard
  if(
      typeof moduleRoute.guards === 'undefined'
      || moduleRoute.guards === null
      || moduleRoute.guards.length === 0) {
    return { matcher: modulePath(),
      component: moduleRoute.component,
      children: moduleRoute.children
    };
  }
  // provided guard(s) without role(s).  Just do authorized check
  if(typeof moduleRoute.roles === 'undefined'
      || moduleRoute.roles === null
      || moduleRoute.roles.length === 0) {
    return { matcher: modulePath(),
      component: moduleRoute.component,
      canLoad: moduleRoute.guards,
      canActivate: moduleRoute.guards,
      canActivateChild: moduleRoute.guards,
      children: moduleRoute.children
    };
  }
  // provided guard(s) and role(s). Do full check
  return { matcher: modulePath(),
    component: moduleRoute.component,
    canLoad: moduleRoute.guards,
    canActivate: moduleRoute.guards,
    canActivateChild: moduleRoute.guards,
    data: { role: moduleRoute.roles },
    children: moduleRoute.children
  };
}
