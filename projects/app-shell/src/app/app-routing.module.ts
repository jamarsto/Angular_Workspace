import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, microFrontEndRoute, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';

const routes: Routes = [
  { path: '', redirectTo: 'retail/path', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorisedComponent },
  microFrontEndRoute({ path: 'retail', name: 'app-app1', guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] }),
  microFrontEndRoute({ path: 'business', name: 'app-app2', guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] }),
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
