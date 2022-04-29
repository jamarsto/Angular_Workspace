import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { SampleRoutingModule } from './remote-app/remote-app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    SampleRoutingModule,
    AuthConfigModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
