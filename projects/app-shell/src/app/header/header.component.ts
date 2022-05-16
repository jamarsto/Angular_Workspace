import { Component, OnInit } from '@angular/core';
import { activeModulePath } from 'lib-micro-front-end';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  collapse(): void {
    this.isNavbarCollapsed = true;
  }

  modulePathActiveClass(activeClass: string, path: string): string {
    if(activeModulePath() === path) {
      return activeClass;
    }
    return '';
  }
}
