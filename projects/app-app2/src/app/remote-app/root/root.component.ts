import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  collapse(): void {
    this.isNavbarCollapsed = true;
  }
}
