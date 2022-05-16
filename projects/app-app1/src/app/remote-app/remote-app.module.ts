import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { AuthConfigModule, MicroFrontEndModule } from 'lib-micro-front-end';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { PaymentComponent } from './payment/payment.component';
import { RemoteAppComponent } from './remote-app.component';
import { RemoteAppRoutingModule } from './remote-app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    PathComponent,
    PaymentComponent,
    RemoteAppComponent,
    RootComponent,
    HeaderComponent
  ],
  providers: [],
  imports: [
    AuthConfigModule,
    BrowserModule,
    CommonModule,
    MicroFrontEndModule,
    RemoteAppRoutingModule,
    NgbModule,
  ]
})
export class RemoteAppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(RemoteAppComponent, {injector: this.injector});
    customElements.define("mfe-app-app1", element);
  }
  ngDoBootstrap() { }
}
