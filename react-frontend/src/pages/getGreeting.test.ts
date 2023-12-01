import { assertIsGreeting } from './getGreeting';

test('should raise exception when not an object', () => {
  expect(() => {
    assertIsGreeting(true);
  }).toThrow('payload is not an object');
});

test('should raise exception when message is missing', () => {
  expect(() => {
    assertIsGreeting({ greeting: 'hello' });
  }).toThrow('payload does not contain message');
});

test('should raise exception when message is not a string', () => {
  expect(() => {
    assertIsGreeting({ message: 401 });
  }).toThrow('message is not a string');
});

test('should not raise exception when is a greeting', () => {
  expect(() => {
    assertIsGreeting({ message: 'hello' });
  }).not.toThrow();
});
