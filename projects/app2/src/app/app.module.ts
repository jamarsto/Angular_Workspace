import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AuthConfigModule } from './auth-config/auth-config.module';

import { AppComponent } from './app.component';
import { SampleRoutingModule } from './remote-app/remote-app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  imports: [
    AuthConfigModule,
    BrowserModule,
    SampleRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
