const LinkedList = require("../linkedList");
const arrayToList = require("../utils/arrayToList");
const listToArray = require("../utils/listToArray");
const sumLists = require("./2-5");

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

  it("sums two one digit numbers", () => {
    const list1 = new LinkedList(1);
    const list2 = new LinkedList(2);

    expect(listToArray(sumLists(list1, list2))).toEqual([3]);
  });

  it("sums one one digit numbers", () => {
    const list1 = new LinkedList(1);
    const list2 = new LinkedList(null);

    expect(listToArray(sumLists(list1, list2))).toEqual([1]);
  });

  it("sums really big numbers", () => {
    const list1 = arrayToList([9, 8, 7, 6, 5, 6, 5]);
    const list2 = arrayToList([5, 6, 7, 8, 5, 4, 3]);

    expect(listToArray(sumLists(list1, list2))).toEqual([4, 5, 5, 5, 1, 1, 9]);
  });
});
