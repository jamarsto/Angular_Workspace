import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { activeModulePath, syncRouteShell } from 'lib-micro-front-end';
import { moduleByPath, pathByModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app-shell';
  isNavbarCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    syncRouteShell(this.router, moduleByPath, pathByModule);
  }

  activeModulePath(): string {
    return activeModulePath();
  }

  modulePathActiveClass(activeClass: string, path: string): string {
    if(activeModulePath() === path) {
      return activeClass;
    }
    return '';
  }
}
