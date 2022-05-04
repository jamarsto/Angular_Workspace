import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import { AuthConfigModule, MicroFrontEndModule } from 'lib-micro-front-end';

import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { RemoteAppComponent } from './remote-app.component';
import { RootComponent } from './root/root.component';
import { RemoteAppRoutingModule } from './remote-app-routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    HomeComponent,
    PathComponent,
    RemoteAppComponent,
    RootComponent,
    ShellComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  imports: [
    AuthConfigModule,
    BrowserModule,
    CommonModule,
    MicroFrontEndModule,
    RemoteAppRoutingModule,
  ]
})
export class RemoteAppModule implements DoBootstrap {
  constructor(private injector: Injector, private oidcSecurityService: OidcSecurityService) {
    const element = createCustomElement(RemoteAppComponent, {injector: this.injector});
    customElements.define("mfe-app2", element);
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
    });
  }
  ngDoBootstrap() { }
}
