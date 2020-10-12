const listToArray = require("./listToArray");
const LinkedList = require("../linkedList");

describe("listToArray", () => {
  const list = new LinkedList(1);
  it("should transform linked list values to an array", () => {
    list.push(2);
    list.push(3);
    expect(listToArray(list)).toEqual([1, 2, 3]);
  });
});
