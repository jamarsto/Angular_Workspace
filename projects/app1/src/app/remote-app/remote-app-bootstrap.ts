import { SampleModule } from './remote-app.module';
import { environment } from '../../environments/environment';
import { bootstrap } from '@angular-architects/module-federation-tools';

bootstrap(SampleModule, {
  production: environment.production,
  appType: 'microfrontend'
}).catch(err => console.error(err));
