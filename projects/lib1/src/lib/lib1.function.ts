import { UrlMatcher, UrlSegment } from '@angular/router';

export function endsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map(u => u.path).join('/');
    const pathLevels = (fullUrl.split('/').length - 1);
    const prefixLevels = (prefix.split('/').length);
    if(pathLevels === 0) {
      if(fullUrl === prefix) {
        return ({ consumed: url });
      }
      return null;
    }
    if (pathLevels <= prefixLevels) {
      if (fullUrl.endsWith('/' + prefix)) {
        return ({ consumed: url });
      }
      return null;
    }
    return null;
  };
}

export function home(excludePaths: string[]): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map(u => u.path).join('/');
    const pathLevels = (fullUrl.split('/').length - 1);
    if(fullUrl.length === 0) {
      return ({ consumed: url });
    }
    for (const excludePath of excludePaths) {
      const prefixLevels = (excludePath.split('/').length);
      if(pathLevels === 0) {
        if(fullUrl === excludePath) {
          return null;
        }
      }
      else {
        if(pathLevels <= prefixLevels) {
          if(fullUrl.endsWith('/' + excludePath)) {
            return null;
          }
        }
      }
    }
    if(pathLevels > 0) {
      return null;
    }
    return ({ consumed: url });
  };
}
