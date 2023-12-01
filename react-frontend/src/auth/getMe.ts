import { NOT_LOGGED_IN } from './UserContext';

export type User = {
  username: string;
  roles: string[];
  exp: number;
};

export async function getMe() {
  const response = await fetch(/*process.env.REACT_APP_GATEWAY_URL + */ '/bff/v1/users/me');
  if (!response.ok) {
    if (response.status === 401) {
      console.log('Response 401');
      return NOT_LOGGED_IN;
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  }
  const body = (await response.json()) as unknown;
  assertIsUser(body);
  return body;
}

export function assertIsUser(payload: unknown): asserts payload is User {
  if (payload === null || typeof payload !== 'object') {
    throw new Error('payload is not an object');
  }
  if (!('username' in payload)) {
    throw new Error('payload does not contain username');
  }
  if (typeof payload.username !== 'string') {
    throw new Error('username is not a string');
  }
  if (!('roles' in payload)) {
    throw new Error('payload does not contain roles');
  }
  if (!Array.isArray(payload.roles)) {
    throw new Error('roles is not an array');
  }
  if (!('exp' in payload)) {
    throw new Error('payload does not contain exp');
  }
  if (typeof payload.exp !== 'number') {
    throw new Error('exp is not a number');
  }
}
