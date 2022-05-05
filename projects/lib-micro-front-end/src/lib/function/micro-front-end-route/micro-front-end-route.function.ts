import { Route } from '@angular/router';
import { microFrontEnd } from '../micro-front-end/micro-front-end.function';

export type mfeRoute = { path: string, name: string, guards?: any[], roles?: string[] }

export function microFrontEndRoute(mfe: mfeRoute) : Route {
  return microFrontEnd(mfe.path, mfe.name, mfe.guards, mfe.roles);
}
