import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoLoginAllRoutesWithRoleGuard, microFrontEnd, modulePath, NotFoundComponent,  UnauthorisedComponent } from 'lib-micro-front-end';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'unauthorized', component: UnauthorisedComponent },
  { matcher: modulePath('unauthorized'), component: UnauthorisedComponent },
  { path: '', component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] },
  microFrontEnd('app-app1', [AutoLoginAllRoutesWithRoleGuard], ['ADMIN']),
  microFrontEnd('app-app2', [AutoLoginAllRoutesWithRoleGuard], 'ADMIN'),
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
