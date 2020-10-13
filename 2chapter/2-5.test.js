const LinkedList = require("../linkedList");
const listToArray = require("../utils/listToArray");
const sumLists = require("./2-5");
const print = require("../utils/print");

describe("sumLists", function () {
  it(`${this.description} should some two linked list values`, () => {
    // 617 + 295 = 912

    const list1 = new LinkedList(7);
    list1.push(1);
    list1.push(6);

    const list2 = new LinkedList(5);
    list2.push(9);
    list2.push(2);

    const expectedValue = new LinkedList(2);
    expectedValue.push(1);
    expectedValue.push(9);

    expect(listToArray(sumLists(list1, list2))).toEqual(
      listToArray(expectedValue)
    );
  });

  it(`${this.description} should sum if number lengths are different`, () => {
    const list1 = new LinkedList(7);
    list1.push(1);
    list1.push(6);
    list1.push(3);

    const list2 = new LinkedList(5);
    list2.push(9);
    list2.push(2);

    const expectedValue = new LinkedList(2);
    expectedValue.push(1);
    expectedValue.push(9);
    expectedValue.push(3);
    expect(listToArray(sumLists(list1, list2))).toEqual(
      listToArray(expectedValue)
    );
  });
});
