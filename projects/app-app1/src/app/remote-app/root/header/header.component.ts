import { Component, OnInit } from '@angular/core';

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
}
