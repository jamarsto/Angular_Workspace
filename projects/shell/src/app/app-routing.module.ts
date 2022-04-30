import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AutoLoginAllRoutesWithRoleGuard, shellPath } from 'lib1';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    matcher: shellPath('component'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/app1/remoteEntry.js', //http://localhost:8000/mfe/app1/remoteEntry.js',
      exposedModule: './SampleModule',
      elementName: 'super-element',
      role: 'USER'
    } as WebComponentWrapperOptions, canLoad: [AutoLoginAllRoutesWithRoleGuard], canActivate: [AutoLoginAllRoutesWithRoleGuard]
  },
  { matcher: shellPath('login'), component: LoginComponent },
  { matcher: shellPath('unauthorised'), component: UnauthorisedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
