const Stack = require("./index");

describe("Stack", function () {
  let stack;
  beforeEach(() => {
    stack = new Stack("hi");
  });
  it(`${this.describe} should exist`, () => {
    expect(stack).toBeTruthy();
  });

  it(`${this.description} push should push and element on to the linked list`, () => {
    expect(typeof stack.push).toBe("function");

    expect(stack.push("friend")).toBe("friend");
    expect(stack.push("george")).toBe("george");

    expect(stack.push("smith")).toBe("smith");
    expect(stack.data.head.val).toBe("smith");
  });

  it(`${this.description} isEmpty should be true`, () => {
    stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });

  it(`${this.description} isEmpty should be false`, () => {
    expect(stack.isEmpty()).toBe(false);
  });

  it(`${this.description} pop should remove the first element in the stack`, () => {
    stack.push("world");
    stack.push("i am a stack");

    expect(stack.pop()).toBe("i am a stack");
    expect(stack.pop()).toBe("world");
    expect(stack.pop()).toBe("hi");
  });

  it(`${this.description} peek should return the first value without removing it from the list`, () => {
    expect(stack.peek()).toBe("hi");
  });
});
