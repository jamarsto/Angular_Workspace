import { Component, OnInit } from '@angular/core';
import { activeModulePath, Module } from 'lib-micro-front-end';
import { shellModule } from '../../remote-app/remote-app-routing.module';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  module: Module = shellModule;
  _localActiveModulePath = activeModulePath;

  constructor() {}

  ngOnInit(): void {}

  collapse(): void {
    this.isCollapsed = true;
  }

  modulePathActiveClass(activeClass: string, path: string): string {
    if(this._localActiveModulePath() === path) {
      return activeClass;
    }
    return '';
  }

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
