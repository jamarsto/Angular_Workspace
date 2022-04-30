import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(modulePath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map(u => u.path).join('/');

    if(!fullUrl.includes('/')) {
      if(modulePath === '') {
        return ({ consumed: url });
      }
      return null;
    }

    const pattern = '^([-a-zA-Z0-9._~]+)/' + modulePath + '$';
    const regex = new RegExp(pattern);

    if(regex.test(fullUrl)) {
      return ({ consumed: url });
    }

    return null;
  }
}

export function shellPath(shellPath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map(u => u.path).join('/');
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

export function pathPrefix(destination: string, url: UrlSegment[]) {
  const fullUrl = url.map(u => u.path).join('/');
  if(!fullUrl.includes('/')) {
    return '.' + destination;
  }
  return '/' + url[0] + destination;
}
