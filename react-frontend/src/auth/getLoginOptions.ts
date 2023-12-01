import { getCookie } from './postLogout';

export type LoginOptions = {
  label: string;
  loginUri: string;
};

export async function getLoginOptions() {
  const csrf = getCookie('XSRF-TOKEN');
  console.log('/login-options', csrf ?? 'None');
  const response = await fetch(/*process.env.REACT_APP_GATEWAY_URL + */ '/login-options');
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const body = (await response.json()) as unknown;
  console.log('LoginOptions;', body ?? 'null');
  assertIsLoginOptions(body);
  return body;
}

export function assertIsLoginOptions(payload: unknown): asserts payload is LoginOptions[] {
  if (!Array.isArray(payload)) {
    throw new Error("payload isn't an array");
  }
  if (payload.length === 0) {
    return;
  }
  payload.forEach((option) => {
    if (!('label' in option)) {
      throw new Error("Login Option doesn't contain id");
    }
    if (typeof option.label !== 'string') {
      throw new Error('label is not a number');
    }
    if (!('loginUri' in option)) {
      throw new Error("Login Option doesn't contain loginUri");
    }
    if (typeof option.loginUri !== 'string') {
      throw new Error('loginUri is not a string');
    }
  });
}
