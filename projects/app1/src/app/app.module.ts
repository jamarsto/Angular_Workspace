import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AuthConfigModule } from 'lib-micro-front-end';

import { AppComponent } from './app.component';
import { RemoteAppRoutingModule } from './remote-app/remote-app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  imports: [
    AuthConfigModule,
    BrowserModule,
    RemoteAppRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
