const LinkedList = require("./index");

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
});
