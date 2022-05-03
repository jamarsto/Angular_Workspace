import { Component } from '@angular/core';
import { OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shell';
  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    // uncomment the following if using AutoLoginPartialRoutesWithRoleGuard

/*    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
      console.log('Shell: app authenticated', isAuthenticated);
      console.log(`Shell: Current access token is '${accessToken}'`);
    });*/
  }
}
