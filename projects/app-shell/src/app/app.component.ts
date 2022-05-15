import { connectRouter, shareNgZone } from '@angular-architects/module-federation-tools';
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

  constructor(private router: Router, private ngZone: NgZone) {
    shareNgZone(this.ngZone);
    connectRouter(this.router);
  }

  ngOnInit(): void {
    this.router
        .events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(() => window.dispatchEvent(new CustomEvent('shellNavigationEvent')));
    window.addEventListener('mfeNavigationEvent', () => this.router.navigateByUrl(window.location.pathname));
  }

  activeMfeId(): string {
    return window.location.pathname.split('/')[1];
  }
}
