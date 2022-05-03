import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AutoLoginAllRoutesWithRoleGuard, AutoLoginPartialRoutesWithRoleGuard, shellPath } from 'lib1';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard]  },
/*{ path: '', component: HomeComponent }, // unprotected entrypoint */
  {
    matcher: shellPath('component'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/app1/remoteEntry.js',
      exposedModule: './SampleModule',
      elementName: 'super-element',
      role: 'ADMIN'
    } as WebComponentWrapperOptions
  },
  { path: 'unauthorised', component: UnauthorisedComponent },
  { path: 'unauthorized', component: UnauthorisedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
