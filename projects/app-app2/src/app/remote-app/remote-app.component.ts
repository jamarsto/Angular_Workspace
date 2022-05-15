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
        .subscribe((evt) => window.dispatchEvent(new CustomEvent('mfeNavigationEvent')));
    this.router.navigateByUrl(window.location.pathname);
    window.addEventListener('popstate', () => this.router.navigateByUrl(window.location.pathname));
    window.addEventListener('shellNavigationEvent', () => this.router.navigateByUrl(window.location.pathname));
  }
}
