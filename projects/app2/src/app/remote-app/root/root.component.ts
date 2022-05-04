import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit {

  constructor(private router: Router) {}

  //ngOnInit() {}
  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  }
}
