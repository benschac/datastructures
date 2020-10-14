const print = require("./print");
const LinkedList = require("../linkedList");

describe("print", function () {
  it(`${this.description} should be a function`, () => {
    expect(typeof print).toBe("function");
  });

  it(`${this.description} should not return a value`, () => {
    let list = new LinkedList(1);
    expect(print(list)).toBe(undefined);
  });
});
