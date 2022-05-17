import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, microFrontEndRoute, Modules, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';

export const modules: Modules = [
  {title: 'Retail', name: 'app-app1', prefix: 'retail', items: [], guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] },
  {title: 'Business', name: 'app-app2', prefix: 'business', items: [], guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN','USER'] },
];

export const moduleByPath: Map<string,string> = new Map<string,string>();
modules.forEach((item) => moduleByPath.set(item.prefix, item.name));

export const pathByModule: Map<string,string> = new Map<string,string>();
modules.forEach((item) => pathByModule.set(item.name, item.prefix));

const routes: Routes = [];
routes.push({ path: '', redirectTo: 'retail', pathMatch: 'full' });
routes.push({ path: 'unauthorized', component: UnauthorisedComponent });
modules.forEach((module) => routes.push(microFrontEndRoute(module)));
routes.push({ path: '**', component: NotFoundComponent });

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
