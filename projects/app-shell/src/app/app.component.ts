import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-shell';
  isNavbarCollapsed = true;
  constructor(private router: Router, private location: Location) {}
  ngOnInit(): void {}

  idOfCurrentMfe(): string {
    return window.location.pathname.split('/')[1];
  }

  idOfCurrentRoute(): string {
    var elements: string[] = window.location.pathname.split('/');
    elements.shift(); elements.shift();
    var id = elements.join('/');
    if( id === '') {
      return '#';
    }
    return id;
  }
}
