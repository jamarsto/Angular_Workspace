import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { modulePath, AutoLoginPartialRoutesWithRoleGuard} from 'lib1';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';

const routes: Routes = [
  { matcher: modulePath(''), component: HomeComponent },
  { matcher: modulePath('path'), component: PathComponent, canActivate: [AutoLoginPartialRoutesWithRoleGuard], data: { role: 'USER' } },
  { matcher: modulePath('unauthorised'), component: UnauthorisedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
