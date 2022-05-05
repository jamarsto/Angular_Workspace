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
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    HomeComponent,
    PathComponent,
    PaymentComponent,
    RemoteAppComponent,
    ShellComponent,
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
  constructor(private injector: Injector) {
    const element = createCustomElement(RemoteAppComponent, {injector: this.injector});
    customElements.define("mfe-app-app2", element);
  }
  ngDoBootstrap() { }
}
