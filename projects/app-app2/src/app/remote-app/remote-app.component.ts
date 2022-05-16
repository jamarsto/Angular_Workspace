import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { syncRouteModule } from 'lib-micro-front-end';

@Component({
  templateUrl: './remote-app.component.html',
  styleUrls: ['./remote-app.component.sass']
})
export class RemoteAppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    syncRouteModule(this.router, 'app-app2');
  }
}
