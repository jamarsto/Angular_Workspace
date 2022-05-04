import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(modulePath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    if(url.length === 1 && modulePath === '') {
      return ({ consumed: url });
    }
    if(url.length > 1 && url[1].path === modulePath) {
      return ({ consumed: url });
    }
    return null;
  }
}
