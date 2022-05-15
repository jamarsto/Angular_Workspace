import { RemoteAppModule } from './remote-app.module';
import { environment } from '../../environments/environment';
import { bootstrap } from '@angular-architects/module-federation-tools';

bootstrap(RemoteAppModule, {
  ngZoneSharing: true,
  production: environment.production,
  appType: 'microfrontend'
}).catch(err => console.error(err));
