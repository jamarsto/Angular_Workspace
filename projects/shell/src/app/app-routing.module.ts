import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    matcher: startsWith('component'),
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: '/mfe/app1/remoteEntry.js', //http://localhost:8000/mfe/app1/remoteEntry.js',
      exposedModule: './SampleModule',
      elementName: 'super-element'
    } as WebComponentWrapperOptions, canLoad: [AutoLoginAllRoutesGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
