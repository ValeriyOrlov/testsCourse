import { makeStack } from "../src/makeStack.js";
import _ from 'lodash';

test("stack's main flow", () => {
    const stack = makeStack();
    stack.push('one');
    stack.push('two');
    expect(stack.pop()).toEqual('two');
    expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
    const stack = makeStack();
    expect(_.isEmpty(stack)).toBe(true);
    stack.push('two');
    expect(_.isEmpty(stack)).toBe(false);
    stack.pop();
    expect(_.isEmpty(stack)).toBe(true);
  });

 /* test('pop in empty stack', () => {
    const stack = makeStack();
  // Вызов метода pop обёрнут в функцию
  // иначе матчер не сможет перехватить исключение
    expect(() => stack.pop()).toThrow();
  })
  */
  