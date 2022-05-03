import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { modulePath, AutoLoginAllRoutesWithRoleGuard } from 'lib1';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [
  { matcher: modulePath(''), component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], /* data: { role: '' } */ /* data: { role: 'USER' } */ /* data: { role: ['USER', 'ADMIN']} */ },
  { matcher: modulePath('path'), component: PathComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: 'USER' } },
  { matcher: modulePath('unauthorised'), component: UnauthorisedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
