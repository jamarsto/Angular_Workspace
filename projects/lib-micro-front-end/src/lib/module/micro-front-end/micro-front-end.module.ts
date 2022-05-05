import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../../component/not-found/not-found.component';
import { UnauthorisedComponent } from '../../component/unauthorised/unauthorised.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    UnauthorisedComponent,
  ],
  imports: [
  ],
  exports: [
    NotFoundComponent,
    UnauthorisedComponent,
  ]
})
export class MicroFrontEndModule { }
