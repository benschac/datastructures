const LinkedList = require("./index");
const listToArray = require("../utils/listToArray");

describe("LinkedList", function () {
  let list;

  beforeEach(() => {
    list = new LinkedList(1);
  });

  it(`${this.description} insert one element`, () => {
    expect(list.head.val).toEqual(1);
    expect(list.length).toBe(1);
  });

  it(`${this.description} push a second element on to the list`, () => {
    const spy = jest.spyOn(list, "push");
    list.push(2);
    expect(list.head.next.val).toEqual(2);
    expect(spy).toHaveBeenCalled();

    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0]).toBe(2);
    spy.mockRestore();
  });

  it(`${this.description} push a third and fourth element on to the list`, () => {
    const spy = jest.spyOn(list, "push");
    list.push(3);
    list.push(4);
    expect(spy.mock.calls.length).toBe(2);
    expect(spy.mock.calls).toEqual([[3], [4]]);
    expect(list.length).toEqual(3);
  });

  it(`${this.description} should have length getter`, () => {
    expect(list.length).toBe(1);
    list.push(2);
    expect(list.length).toBe(2);
  });

  it(`${this.description} findByIndex should return value`, () => {
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    expect(list.findByIndex(0)).toBe(1);
    expect(list.findByIndex(3)).toBe(4);
  });

  it(`${this.description} findByIndex with an empty linkedlist should return undefined`, () => {
    let emptyList = new LinkedList();

    expect(emptyList.findByIndex(0)).toBe(null);
    expect(emptyList.findByIndex(3)).toBe(null);
  });

  it(`${this.description} findByIndex should return null if index doesn't exist`, () => {
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    expect(list.findByIndex(10)).toBe(null);
  });

  it(`${this.description} pop should remove the last element`, () => {
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    expect(list.pop()).toBe(5);
    expect(list.length).toBe(4);
  });

  it(`${this.description} shift remove the first element`, () => {
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    expect(list.shift()).toBe(1);
    expect(list.length).toBe(4);
  });

  it(`${this.description} should remove the first node in the list`, () => {
    list.push(2);
    list.push(3);

    list.remove(0);

    expect(list.head.val).toBe(2);
  });

  it(`${this.description} unshift: should add an element to the top of the list and return length`, () => {
    list.push(2);
    list.push(3);

    list.unshift(4);
    expect(listToArray(list)).toEqual([4, 1, 2, 3]);
    list.unshift(5);
    expect(listToArray(list)).toEqual([5, 4, 1, 2, 3]);
  });
});
