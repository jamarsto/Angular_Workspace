import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthConfigModule, MicroFrontEndModule } from 'lib-micro-front-end';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthConfigModule,
    BrowserModule,
    MicroFrontEndModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
