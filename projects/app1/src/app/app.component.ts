import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app1';
  constructor(public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
      console.log('App1: app authenticated', isAuthenticated);
      console.log(`App1: Current access token is '${accessToken}'`);
    });
  }
  ngOnInit() {}
}
