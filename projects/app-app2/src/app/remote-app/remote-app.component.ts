import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './remote-app.component.html',
  styleUrls: ['./remote-app.component.sass']
})
export class RemoteAppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname);
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname);
    });
  }
}
