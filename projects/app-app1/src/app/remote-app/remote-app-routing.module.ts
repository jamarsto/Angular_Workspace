import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, moduleRoute, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';
import { HomeComponent } from './home/home.component';
import { PathComponent } from './path/path.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'retail', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorisedComponent },
  moduleRoute({ guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'], children: [
    { path: '', component: HomeComponent },
    { path: 'path', component: PathComponent },
    { path: 'payment', component: PaymentComponent },
  ]}),
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RemoteAppRoutingModule { }
