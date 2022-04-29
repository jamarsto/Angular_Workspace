import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { endsWith, home } from 'lib1';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/shell', pathMatch: 'full' }, // this is for local testing without the shell application
  { matcher: home(['path']), component: HomeComponent, canActivate: [AutoLoginAllRoutesGuard] },
  { matcher: endsWith('path'), component: PathComponent, canActivate: [AutoLoginAllRoutesGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
