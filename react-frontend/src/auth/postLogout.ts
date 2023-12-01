export function getCookie(key: string) {
  var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : 'None';
}

export async function postLogout() {
  const csrf = getCookie('XSRF-TOKEN');
  const headers = csrf ? { 'X-XSRF-TOKEN': csrf } : undefined;
  const response = await fetch(/*process.env.REACT_APP_GATEWAY_URL + */ '/logout', {
    method: 'POST',
    body: null,
    headers: headers,
  });
  let location = response.headers?.get('Location') ?? null;
  if (location !== null) {
    window.location.href = location;
  }
}
