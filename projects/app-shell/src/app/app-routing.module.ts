import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, microFrontEndRoute, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] },
  { path: 'unauthorized', component: UnauthorisedComponent },
  microFrontEndRoute({ path: 'retail', name: 'app-app1', guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN'] }),
  microFrontEndRoute({ path: 'business', name: 'app-app2', guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN'] }),
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
