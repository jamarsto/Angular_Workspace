export function activeModulePath(): string {
  var segments: string[] = window.location.pathname.split('/');
  if(segments.length > 1) {
    return segments[1];
  }
  return '#';
}
