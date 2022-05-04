import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthConfigModule, MicroFrontEndModule } from 'lib-micro-front-end';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
