import { NgModule } from '@angular/core';
import { UnauthorisedComponent } from '../../component/unauthorised/unauthorised.component';
import { NotFoundComponent } from '../../component/not-found/not-found.component';



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
