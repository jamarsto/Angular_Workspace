import { UrlMatcher, UrlSegment } from '@angular/router';

export function shellPath(shellPath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl: string = url.map(u => u.path).join('/');
    if(!fullUrl.includes('/')) {
      if(shellPath === fullUrl) {
        return ({ consumed: url });
      }
      return null;
    }
    if(fullUrl.startsWith(shellPath + '/')) {
      return ({ consumed: url });
    }
    return null;
  }
}
