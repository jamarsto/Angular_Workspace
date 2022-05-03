import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, modulePath} from 'lib1';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathComponent } from './path/path.component';
import { ShellComponent } from './shell/shell.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [
  { path: 'unauthorized', component: UnauthorisedComponent },
  { matcher: modulePath('unauthorized'), component: UnauthorisedComponent },
  { path: '', component: ShellComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] }, // standalone entry point
  { matcher: modulePath(''), component: HomeComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: ['ADMIN','USER'] } },
  { matcher: modulePath('path'), component: PathComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard], data: { role: ['ADMIN','USERx'] } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
