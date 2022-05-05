import { Route } from '@angular/router';
import { modulePath } from '../module-path/module-path.function';
import { RootComponent } from '../../component/root/root.component';

export type ModuleRoute = { component?: any, guards?: any[], roles?: string[], children: Route[] }

export function moduleRoute(moduleRoute: ModuleRoute) : Route {
  const moduleRouteComponent: any =
      typeof moduleRoute.component === 'undefined'
          ? RootComponent
          : moduleRoute.component;
  // provided a role without a guard. Hence don't try to guard
  if(
      typeof moduleRoute.guards === 'undefined'
      || moduleRoute.guards === null
      || moduleRoute.guards.length === 0) {
    return { matcher: modulePath(),
      component: moduleRouteComponent,
      children: moduleRoute.children
    };
  }
  // provided guard(s) without role(s).  Just do authorized check
  if(typeof moduleRoute.roles === 'undefined'
      || moduleRoute.roles === null
      || moduleRoute.roles.length === 0) {
    return { matcher: modulePath(),
      component: moduleRouteComponent,
      canLoad: moduleRoute.guards,
      canActivate: moduleRoute.guards,
      canActivateChild: moduleRoute.guards,
      children: moduleRoute.children
    };
  }
  // provided guard(s) and role(s). Do full check
  return { matcher: modulePath(),
    component: moduleRouteComponent,
    canLoad: moduleRoute.guards,
    canActivate: moduleRoute.guards,
    canActivateChild: moduleRoute.guards,
    data: { role: moduleRoute.roles },
    children: moduleRoute.children
  };
}
