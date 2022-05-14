import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor() {}
  ngOnInit(): void {}
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
