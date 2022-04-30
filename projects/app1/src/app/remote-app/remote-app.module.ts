import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { PathComponent } from './path/path.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SampleRoutingModule } from './remote-app-routing.module';
import { RemoteAppComponent } from './remote-app.component';
import { AuthConfigModule } from '../auth/auth-config.module';
//import { LoginComponent } from './login/login.component';
//import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

@NgModule({
  declarations: [
    PathComponent,
    HomeComponent,
//    LoginComponent,
    NotFoundComponent,
//    UnauthorisedComponent,
    RemoteAppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  imports: [
    AuthConfigModule,
    BrowserModule,
    CommonModule,
    SampleRoutingModule,
  ]
})
export class SampleModule implements DoBootstrap {
  constructor(private injector: Injector, public oidcSecurityService: OidcSecurityService) {
    const element = createCustomElement(RemoteAppComponent, {injector: this.injector});
    customElements.define("super-element", element);
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
      console.log('App1: app authenticated', isAuthenticated);
      console.log(`App1: Current access token is '${accessToken}'`);
    });
  }
  ngDoBootstrap() { }
}
