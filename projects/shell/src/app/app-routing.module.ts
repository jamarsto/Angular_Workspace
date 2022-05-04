import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AutoLoginAllRoutesWithRoleGuard, modulePath, shellPath, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';
import { HomeComponent } from './home/home.component';
//import { NotFoundComponent } from './not-found/not-found.component';
//import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [
  { path: 'unauthorized', component: UnauthorisedComponent },
  { matcher: modulePath('unauthorized'), component: UnauthorisedComponent },
  { path: '', component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard]  },
  {
    matcher: shellPath('app1'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/app1/remoteEntry.js',
      exposedModule: './RemoteAppModule',
      elementName: 'mfe-app1',
      role: ['ADMIN'],
    } as WebComponentWrapperOptions, canActivate: [AutoLoginAllRoutesWithRoleGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
