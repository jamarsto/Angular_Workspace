import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(): UrlMatcher {
  return (url: UrlSegment[]) => {
    if(url.length === 1) {
      return ({ consumed: url });
    }
    if(url.length > 1) {
      return ({ consumed: [url[0]] });
    }
    return null;
  }
}
