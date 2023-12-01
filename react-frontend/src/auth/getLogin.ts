export function getLogin(uri: string) {
  if (!uri.startsWith('http')) {
    console.log('URI', uri, 'is not a valid URI');
    return null;
  }
  window.location.href = uri;
}
