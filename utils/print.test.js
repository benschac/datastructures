let print = require("./print");
const LinkedList = require("../linkedList");

describe("print", function () {
  it(`${this.description} should be a function`, () => {
    expect(typeof print).toBe("function");
  });

  it(`${this.description} should not return a value`, () => {
    let list = new LinkedList(1);
    expect(typeof print(list)).toBe("function");
  });

  it(`${this.description} should not return a value`, () => {
    let list = new LinkedList(1);
    list.push(2);
    let print = jest.fn(require("./print"));
    let log = jest.fn(() => console.log);

    expect(print(log)(list)).toBe(undefined);
    expect(log.mock.calls).toEqual([[1], [2]]);
  });
});
