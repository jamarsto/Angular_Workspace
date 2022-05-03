import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(modulePath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl: string = url.map(u => u.path).join('/');

    if(!fullUrl.includes('/')) {
      if(modulePath === '') {
        return ({ consumed: url });
      }
      return null;
    }

    const pattern: string = '^([-a-zA-Z0-9._~]+)/' + modulePath + '$';
    const regex: RegExp = new RegExp(pattern);

    if(regex.test(fullUrl)) {
      return ({ consumed: url });
    }

    return null;
  }
}
