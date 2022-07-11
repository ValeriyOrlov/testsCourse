import { capitalize } from '../src/capitalize.js';

test('capitalize', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('')).toEqual('');
  });