import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoLoginAllRoutesWithRoleGuard, microFrontEnd, modulePath, NotFoundComponent,  UnauthorisedComponent } from 'lib-micro-front-end';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] },
  { path: 'unauthorized', component: UnauthorisedComponent },
  microFrontEnd('app-app1', [AutoLoginAllRoutesWithRoleGuard], ['ADMIN']),
  microFrontEnd('app-app2', [AutoLoginAllRoutesWithRoleGuard], 'ADMIN'),
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
