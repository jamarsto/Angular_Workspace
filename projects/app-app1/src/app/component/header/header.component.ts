import { Component, OnInit } from '@angular/core';
import { activeModulePath } from 'lib-micro-front-end';
import { Modules } from 'lib-micro-front-end';
import { shellModules } from '../../remote-app/remote-app-routing.module';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  modules: Modules = shellModules;

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
