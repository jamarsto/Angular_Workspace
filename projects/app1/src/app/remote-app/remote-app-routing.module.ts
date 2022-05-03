import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { modulePath, AutoLoginAllRoutesWithRoleGuard} from 'lib1';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { ShellComponent } from './shell/shell.component';
import { OidcSecurityService, AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';

const routes: Routes = [
  { path: '', component: ShellComponent, canActivate: [AutoLoginAllRoutesGuard] }, // standalone entry point
  { matcher: modulePath(''), component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] },
  { matcher: modulePath('path'), component: PathComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: 'USER' } },
  { matcher: modulePath('unauthorised'), component: UnauthorisedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
