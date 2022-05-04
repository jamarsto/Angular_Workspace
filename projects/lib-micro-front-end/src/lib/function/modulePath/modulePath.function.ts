import { UrlMatcher, UrlSegment } from '@angular/router';

export function modulePath(modulePath: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl: string = url.map(u => u.path).join('/');

    if(!fullUrl.includes('/')) {
      if(modulePath === '') {
        //alert('modulePath: ' + modulePath + 'Match: ' + fullUrl);
        return ({ consumed: url });
      }
      if(modulePath !== 'unauthorized') {
      //alert('modulePath: ' + modulePath + ' Nomatch: ' + fullUrl);
      }
      return null;
    }

    const pattern: string = '^([-a-zA-Z0-9._~]+)/' + modulePath + '$';
    const regex: RegExp = new RegExp(pattern);

    //alert('modulePath: Regex: ' + regex);

    if(regex.test(fullUrl)) {
      //alert('modulePath: Match: ' + fullUrl);
      return ({ consumed: url });
    }
    //alert('modulePath: Nomatch: ' + fullUrl);
    return null;
  }
}
