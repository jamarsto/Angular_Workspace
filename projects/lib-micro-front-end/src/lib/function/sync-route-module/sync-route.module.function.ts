import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

export function syncRouteModule(router: Router, module: string): void {
  router
      .events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => dispatchEvent(module));
  window.addEventListener('popstate', () => navigate(router));
  window.addEventListener('shellNavigationEvent', (event) => updateRoute(router, event as CustomEvent, module));
  navigate(router);
}

function details(module: string): CustomEventInit {
  return { detail: module };
}

function dispatchEvent(module: string): void {
  window.dispatchEvent(new CustomEvent('mfeNavigationEvent', details(module)));
}

function navigate(router: Router): void {
  router.navigateByUrl(window.location.pathname);
}

function updateRoute(router: Router, event: CustomEvent, module: string): void {
  if(event.detail === module) {
    navigate(router);
  }
}
