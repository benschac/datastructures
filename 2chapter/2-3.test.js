const listToArray = require("../utils/listToArray");
const arrayToList = require("../utils/arrayToList");
const print = require("../utils/print");
const deleteMiddleNode = require("./2-3");

describe("deleteMiddleNode", () => {
  it("should delete c in a-b-c-d-e-f", () => {
    const values = Array.from("abcdef");
    const list = arrayToList(values);

    deleteMiddleNode(list);
    expect(listToArray(list)).toEqual(["a", "b", "d", "e", "f"]);
  });
});
