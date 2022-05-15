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
        .subscribe(() => this.dispatchEvent());
    this.navigate();
    window.addEventListener('popstate', () => this.navigate());
    window.addEventListener('shellNavigationEvent', (event) => this.updateRoute(event as CustomEvent));
  }

  private details(): CustomEventInit {
    return { detail: 'app-app2' };
  }

  private dispatchEvent(): void {
    window.dispatchEvent(new CustomEvent('mfeNavigationEvent', this.details()));
  }

  private navigate(): void {
    this.router.navigateByUrl(window.location.pathname);
  }

  private updateRoute(event: CustomEvent): void {
    if(event.detail === 'app-app12') {
      this.navigate();
    }
  }
}
