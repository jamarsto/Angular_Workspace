import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(modulePath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    if(url.length === 1 && modulePath === '') {
      return ({ consumed: url });
    }
    if(url.length > 1) {
      const consumedUrl: UrlSegment[] = [url[0]];
      return ({ consumed: consumedUrl });
    }
    return null;
  }
}
