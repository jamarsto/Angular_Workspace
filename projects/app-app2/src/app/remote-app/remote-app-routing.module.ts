import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, MenuItems, moduleRoute, Modules, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';
import { HomeComponent } from './component/home/home.component';
import { PathComponent } from './component/path/path.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RootComponent } from './component/root/root.component';
import {default as jsonMenuItems} from '../../../src/assets/menu.json';

export const  shellModules: Modules = [{name: 'app-app2', title: 'Business', prefix: 'business', items: jsonMenuItems as MenuItems }];

const routes: Routes = [
  { path: '', redirectTo: shellModules[0].prefix, pathMatch: 'full'},
  { path: 'unauthorized', component: UnauthorisedComponent },
  moduleRoute({ component: RootComponent, guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN','USER'], children: [
    { path: '', component: HomeComponent },
    { path: 'path', component: PathComponent },
    { path: 'payment', component: PaymentComponent },
    { path: '**', component: NotFoundComponent }
  ]}),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RemoteAppRoutingModule { }
