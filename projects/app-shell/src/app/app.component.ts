import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { activeModulePath, syncRouteShell } from 'lib-micro-front-end';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-shell';
  isNavbarCollapsed = true;
  private moduleByPath: Map<string,string> = new Map<string,string>();
  private pathByModule: Map<string,string> = new Map<string,string>();

  constructor(private router: Router, private ngZone: NgZone) {
    this.moduleByPath.set('retail', 'app-app1');
    this.moduleByPath.set('business', 'app-app2');

    this.pathByModule.set('app-app1', 'retail');
    this.pathByModule.set('app-app2', 'business');
  }

  ngOnInit(): void {
    syncRouteShell(this.router, this.moduleByPath, this.pathByModule);
  }

  activeModulePath(): string {
    return activeModulePath();
  }

  moduleActiveClass(activeClass: string, path: string): string {
    if(activeModulePath() === path) {
      return activeClass;
    }
    return '';
  }
}
