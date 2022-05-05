import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(): UrlMatcher {
  return (url: UrlSegment[]) => {
    if(url.length > 0) {
      return ({ consumed: [url[0]] });
    }
    return null;
  }
}
