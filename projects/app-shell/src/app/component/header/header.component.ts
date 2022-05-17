import { Component, OnInit } from '@angular/core';
import { activeModulePath } from 'lib-micro-front-end';
import { MenuItemsService } from '../../service/menu-items/menu-items.service';
import { modules } from '../../app-routing.module';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  modules = modules;

  constructor(private menuItemService: MenuItemsService) {}

  ngOnInit(): void {
    this.modules.forEach((entry) => this
        .menuItemService
        .getMenuItemsForModule(entry.name)
        .subscribe((children) => entry.items = children));
  }

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
