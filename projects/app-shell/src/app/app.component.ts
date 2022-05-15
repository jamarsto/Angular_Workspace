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
        .subscribe(() => this.dispatchEvent());
    this.navigate();
    window.addEventListener('popstate', () => this.navigate());
    window.addEventListener('mfeNavigationEvent', (event) => this.updateRoute(event as CustomEvent));
  }

  private details(): CustomEventInit {
    return { detail: this.modules.get(this.activeMfeId()) };
  }

  private dispatchEvent() : void {
    window.dispatchEvent(new CustomEvent('shellNavigationEvent', this.details()));
  }

  private navigate(): void {
    this.router.navigateByUrl(window.location.pathname);
  }

  private updateRoute(event: CustomEvent): void {
    if(this.activeMfeId() === this.paths.get(event.detail)) {
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
