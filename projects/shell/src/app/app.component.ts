import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shell';
  constructor(private oidcSecurityService: OidcSecurityService,private router: Router) {}

  ngOnInit(): void {
/*    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
    });*/
    //this.router.navigateByUrl(location.pathname.substr(1));
    //window.addEventListener('popstate', () => {
//      this.router.navigateByUrl(location.pathname.substr(1));
//    });
  }
}
