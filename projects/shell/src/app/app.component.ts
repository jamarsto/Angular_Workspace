import { Component } from '@angular/core';
import { OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shell';
  constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    // uncomment the following if using AutoLoginPartialRoutesWithRoleGuard

/*    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
    });*/
  }
}
