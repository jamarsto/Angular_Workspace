import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { activeModulePath } from "../active-module-path/active-module-path.function";

export function syncRouteShell(router: Router, moduleByPath: Map<string, string>, pathByModule: Map<string, string>): void {
  router
      .events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => dispatchEvent(moduleByPath));
  window.addEventListener('popstate', () => navigate(router));
  window.addEventListener('mfeNavigationEvent', (event) => updateRoute(router, event as CustomEvent, pathByModule));
  navigate(router);
}

function details(moduleByPath: Map<string,string>): CustomEventInit {
  return { detail: moduleByPath.get(activeModulePath()) };
}

function dispatchEvent(moduleByPath: Map<string,string>): void {
  window.dispatchEvent(new CustomEvent('shellNavigationEvent', details(moduleByPath)));
}

function navigate(router: Router): void {
  router.navigateByUrl(window.location.pathname);
}

function updateRoute(router: Router, event: CustomEvent, pathByModule: Map<string,string>): void {
  if(activeModulePath() === pathByModule.get(event.detail)) {
    navigate(router);
  }
}
