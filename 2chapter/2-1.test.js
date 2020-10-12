const LinkedList = require("../linkedList");
const removeDupes = require("./2-1");
const listToArray = require("../utils/listToArray");
const print = require("../utils/print");

describe("removeDupes", function () {
  let list;
  beforeAll(() => {
    list = new LinkedList(1);
    list.push(2);
  });

  afterEach(() => {
    list = new LinkedList(1);
    list.push(2);
  });

  it(`${this.description} should handle a list with unique values`, () => {
    expect(listToArray(removeDupes(list))).toEqual([1, 2]);
  });

  it(`${this.description} should remove a single duplicate`, () => {
    list.push(2);
    expect(listToArray(removeDupes(list))).toEqual([1, 2]);
  });

  it(`${this.description} should remove a multiple duplicates`, () => {
    list.push(2);
    list.push(2);
    list.push(2);
    list.push(2);
    list.push(2);
    list.push(3);

    expect(listToArray(removeDupes(list))).toEqual([1, 2, 3]);
  });

  it(`${this.description} should remove a random multiple duplicates`, () => {
    list.push(2);
    list.push(2);
    list.push(2);
    list.push(2);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(2);

    expect(listToArray(removeDupes(list))).toEqual([1, 2, 3, 4]);
  });
});
