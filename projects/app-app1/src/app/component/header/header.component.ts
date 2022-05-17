import { Component, OnInit } from '@angular/core';
import { activeModulePath } from 'lib-micro-front-end';
import { MenuItems, Modules } from 'lib-micro-front-end';
import {default as jsonMenuItems} from '../../../../src/assets/menu.json';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  modules: Modules = [{name: 'app-app1', title: 'Retail', prefix: 'retail', items: jsonMenuItems as MenuItems }];

  constructor() {}

  ngOnInit(): void {}

  collapse(): void {
    this.isCollapsed = true;
  }

  modulePathActiveClass(activeClass: string, path: string): string {
    if(activeModulePath() === path) {
      return activeClass;
    }
    return '';
  }

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
