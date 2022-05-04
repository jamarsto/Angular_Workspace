import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, modulePath, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { RootComponent } from './root/root.component';
import { shellComponent } from './shell/shell.component';

const routes: Routes = [
  //{ matcher: modulePath('unauthorized'), component: UnauthorisedComponent },
  { path: '', component: shellComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] }, // standalone entry point
  { path: 'unauthorized', component: UnauthorisedComponent },
  //{ matcher: modulePath(''), component: RootComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: ['ADMIN','USER'] } },
  //{ matcher: modulePath('home'), component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: ['ADMIN','USER'] },
  { matcher: modulePath(''), component: RootComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: ['ADMIN','USER'] },
      children: [
        { path: '', component: HomeComponent },
        { path: 'path', component: PathComponent },
        { path: 'home', component: HomeComponent },
        { path: 'unauthorized', component: UnauthorisedComponent },
        { path: '**', component: NotFoundComponent }
      ]
  },
  //{ matcher: modulePath('path'), component: PathComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: ['ADMIN','USER'] } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RemoteAppRoutingModule { }
