import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { syncRouteShell } from 'lib-micro-front-end';
import { moduleByPath, pathByModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router) {
    syncRouteShell(this.router, moduleByPath, pathByModule);
  }
}
