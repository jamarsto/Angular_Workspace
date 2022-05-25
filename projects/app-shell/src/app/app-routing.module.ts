import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, CustomShellRoutes, initialiseShellRoutes, NotFoundComponent, UnauthorisedComponent } from '@jamarsto/kiunzi-micro-frontend-tools';

export const customShellRoutes: CustomShellRoutes = {
	headRoutes: [
		{ path: '', redirectTo: 'retail', pathMatch: 'full' },
		{ path: 'unauthorized', component: UnauthorisedComponent }
	],
	moduleRoutes: [
		{ title: 'Retail', name: 'app1', prefix: 'retail', items: [], guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] },
		{ title: 'Business', name: 'app2', prefix: 'business', items: [], guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] }
	],
	tailRoutes: [
		{ path: '**', component: NotFoundComponent }
	]
}

const routes: Routes = initialiseShellRoutes(customShellRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
