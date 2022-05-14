import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-shell';
  isNavbarCollapsed = true;
  constructor() {}
  ngOnInit(): void {}

  idOfCurrentMfe(): string {
    return window.location.pathname.split('/')[1];
  }
}
