import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthConfigModule, MicroFrontEndModule } from 'lib-micro-front-end';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './local-app/header/header.component';
import { FooterComponent } from './local-app/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    AuthConfigModule,
    BrowserModule,
    MicroFrontEndModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
