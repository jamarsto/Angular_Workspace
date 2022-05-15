import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  templateUrl: './remote-app.component.html',
  styleUrls: ['./remote-app.component.sass']
})
export class RemoteAppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router
        .events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(() => window.dispatchEvent(new CustomEvent('mfeNavigationEvent', this.details())));
    this.navigate();
    window.addEventListener('popstate', () => this.navigate());
    window.addEventListener('shellNavigationEvent', (e) => this.updateRoute(e as CustomEvent));
  }

  private details(): CustomEventInit {
    return { detail: 'app-app1' };
  }

  private navigate(): void {
    this.router.navigateByUrl(window.location.pathname);
  }

  private updateRoute(event: CustomEvent): void {
    if(event.detail === 'app-app1') {
      this.navigate();
    }
  }
}
