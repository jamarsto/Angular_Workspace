import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AutoLoginAllRoutesWithRoleGuard, shellPath } from 'lib1';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

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
    } as WebComponentWrapperOptions, canLoad: [AutoLoginAllRoutesWithRoleGuard], canActivate: [AutoLoginAllRoutesWithRoleGuard],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
