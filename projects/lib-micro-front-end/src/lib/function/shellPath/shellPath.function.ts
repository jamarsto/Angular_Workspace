import { UrlMatcher, UrlSegment } from '@angular/router';

export function shellPath(shellPath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl: string = url.map(u => u.path).join('/');
    if(!fullUrl.includes('/')) {
      if(shellPath === fullUrl) {
        console.warn('shellPath: ' + fullUrl);
        return ({ consumed: url });
      }
      console.warn('Nomatch ' + url);
      return null;
    }
    if(fullUrl.startsWith(shellPath + '/')) {
      console.warn('shellPath: Match: ' + fullUrl);
      return ({ consumed: url });
    }
    console.warn('shellPath: Nomatch: ' + fullUrl);
    return null;
  }
}
