import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { MicroFrontEndModule } from '@jamarsto/kiunzi-micro-frontend-tools';
import { HomeComponent } from './children/home/home.component';
import { PathComponent } from './children/path/path.component';
import { PaymentComponent } from './children/payment/payment.component';
import { RemoteAppComponent } from './remote-app.component';
import { RemoteAppRoutingModule, shellModule } from './remote-app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/component/header/header.component';
import { AuthConfigModule } from 'lib-micro-front-end';

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
    NgbModule
  ]
})
export class RemoteAppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(RemoteAppComponent, {injector: this.injector});
    customElements.define('mfe-' + shellModule.name, element);
  }
  ngDoBootstrap() { }
}
