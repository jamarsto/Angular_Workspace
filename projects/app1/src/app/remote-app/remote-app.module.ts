import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MicroFrontEndModule } from 'lib-micro-front-end';
import { AuthConfigModule } from '../auth/auth-config.module';
import { RemoteAppComponent } from './remote-app.component';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { SampleRoutingModule } from './remote-app-routing.module';

@NgModule({
  declarations: [
    RemoteAppComponent,
    ShellComponent,
    HomeComponent,
    PathComponent,
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
    MicroFrontEndModule,
  ]
})
export class RemoteAppModule implements DoBootstrap {
  constructor(private injector: Injector, private oidcSecurityService: OidcSecurityService) {
    const element = createCustomElement(RemoteAppComponent, {injector: this.injector});
    customElements.define("mfe-app1", element);
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
    });
  }
  ngDoBootstrap() { }
}
