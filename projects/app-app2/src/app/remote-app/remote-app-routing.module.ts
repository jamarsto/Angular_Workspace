import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, CustomModuleRoutes, initialiseModuleRoutes, MenuItems, Module, NotFoundComponent, UnauthorisedComponent} from '@jamarsto/kiunzi-micro-frontend-tools';
import { HomeComponent } from './children/home/home.component';
import { PathComponent } from './children/path/path.component';
import { PaymentComponent } from './children/payment/payment.component';
import { RootComponent } from './root/root.component';
import { default as jsonMenuItems } from '../../../src/assets/menu.json';

// shellModule.name is used to in setting up route synchronisation, so is a vital attribute
// the shellModule as a whole is also used by the local shell simulator
export const shellModule: Module = {name: 'app-app2', title: 'app-app2', prefix: 'app-app2', items: jsonMenuItems.menuItems as MenuItems };

// customRoutes.headRoutes and customRoutes.tailRoutes are used by the local shell simulator, they cannot be accessed from the real shell.
// customRoutes.tailRoutes could only match a path of '**' and only then if there is no '**' path as a child in the moduleRoute so is usually left empty.
const customRoutes: CustomModuleRoutes = {
  headRoutes: [
    { path: '', redirectTo: shellModule.prefix, pathMatch: 'full' },
    { path: 'unauthorized', component: UnauthorisedComponent }
  ],
  moduleRoute: { component: RootComponent, guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'], children: [
    { path: '', component: HomeComponent },
    { path: 'path', component: PathComponent },
    { path: 'payment', component: PaymentComponent },
    { path: '**', component: NotFoundComponent }
  ]},
  tailRoutes: []
}

const routes: Routes = initialiseModuleRoutes(customRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RemoteAppRoutingModule { }
