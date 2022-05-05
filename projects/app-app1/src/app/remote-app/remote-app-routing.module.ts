import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, moduleRoute, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { PaymentComponent } from './payment/payment.component';
import { RootComponent } from './root/root.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  { path: '', component: ShellComponent, canActivate: [AutoLoginAllRoutesWithRoleGuard] }, // standalone entry point
  { path: 'unauthorized', component: UnauthorisedComponent }, // standalone authorization
  moduleRoute({ component: RootComponent, guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'], children: [
    { path: '', component: HomeComponent },
    { path: 'path', component: PathComponent },
    { path: 'payment', component: PaymentComponent },
  ]}),
  { path: '**', component: NotFoundComponent } // standalone not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RemoteAppRoutingModule { }
