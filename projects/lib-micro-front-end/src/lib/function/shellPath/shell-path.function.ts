import { UrlMatcher, UrlSegment } from '@angular/router';

export function shellPath(shellPath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    if(url.length > 0 && url[0].path === shellPath) {
      return ({ consumed: url });
    }
    return null;
  }
}
