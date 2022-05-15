import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-shell';
  isNavbarCollapsed = true;
  private modules: Map<string,string> = new Map<string,string>();
  private paths: Map<string,string> = new Map<string,string>();


  constructor(private router: Router, private ngZone: NgZone) {
    this.modules.set('retail', 'app-app1');
    this.modules.set('business', 'app-app2');

    this.paths.set('app-app1', 'retail');
    this.paths.set('app-app2', 'business');
  }

  ngOnInit(): void {
    this.router
        .events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(() => window.dispatchEvent(new CustomEvent('shellNavigationEvent', this.details())));
    this.navigate();
    window.addEventListener('popstate', () => this.navigate());
    window.addEventListener('mfeNavigationEvent', (e) => this.updateRoute(e as CustomEvent));
  }

  private details(): CustomEventInit {
    return { detail: this.modules.get(this.activeMfeId()) };
  }

  private navigate(): void {
    this.router.navigateByUrl(window.location.pathname);
  }

  private updateRoute(event: CustomEvent): void {
    const path: string | undefined = this.paths.get(event.detail);
    const segments: string[] = window.location.pathname.split('/');
    if(segments.length > 1 && segments[1] === path) {
      this.navigate();
    }
  }

  activeMfeId(): string {
    var segments: string[] = window.location.pathname.split('/');
    if(segments.length > 1) {
      return segments[1];
    }
    return '#';
  }
}
