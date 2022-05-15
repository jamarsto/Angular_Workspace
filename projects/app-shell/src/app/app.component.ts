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

  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.router
        .events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(() => window.dispatchEvent(new CustomEvent('shellNavigationEvent')));
    this.router.navigateByUrl(window.location.pathname);
    window.addEventListener('popstate', () => this.router.navigateByUrl(window.location.pathname));
    window.addEventListener('mfeNavigationEvent', () => this.router.navigateByUrl(window.location.pathname));
  }

  activeMfeId(): string {
    return window.location.pathname.split('/')[1];
  }
}
