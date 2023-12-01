export type Greeting = {
  message: string;
};

export async function getGreeting() {
  const response = await fetch(/*process.env.REACT_APP_GATEWAY_URL + */ '/bff/v1/greeting');
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const body = (await response.json()) as unknown;
  console.log('greeting:', body ?? 'null');
  assertIsGreeting(body);
  return body;
}

export function assertIsGreeting(payload: unknown): asserts payload is Greeting {
  if (payload === null || typeof payload !== 'object') {
    throw new Error('payload is not an object');
  }
  if (!('message' in payload)) {
    throw new Error('payload does not contain message');
  }
  if (typeof payload.message !== 'string') {
    throw new Error('message is not a string');
  }
}
