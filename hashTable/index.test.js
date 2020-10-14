const HashTable = require("./index");

let count = (list) => {
  return list.reduce((count, val) => {
    if (val) {
      count++;
    }

    return count;
  }, 0);
};

describe("HashTable", function () {
  let table;

  beforeEach(() => {
    table = new HashTable();
  });

  afterEach(() => {
    table;
  });

  it(`${this.description} should instantiate with empty list with 4 undefined slots`, () => {
    expect(table.list).toEqual(new Array(4));
    expect(Array.isArray(table.list)).toBe(true);
  });

  it(`${this.description} should insert value with a LinkedList`, () => {
    table.insert("hello", "world");

    expect(count(table.list)).toEqual(1);
  });

  it(`${this.description} should insert value with a LinkedList`, () => {
    table.insert("hello", "world");
    table.insert("john", "smith");
    table.insert("jane", "smith");
    table.insert("sean", "smith2");
    let idx = table.getIndex("sean");

    let slot = table.list[idx].head;

    while (slot.next) {
      slot = slot.next;
    }

    console.log(table);
    expect(slot).toHaveProperty("val.key", "sean");
    expect(table.getValue("sean")).toEqual("smith2");
    expect(count(table.list)).toEqual(2);
  });

  it(`${this.description} getValue should return the correct value`, () => {
    table.insert("hello", "world");
    let idx = table.getIndex("hello");

    let slot = table.list[idx];
    expect(slot).toHaveProperty("head");
    expect(slot["head"]).toHaveProperty("next");
    expect(table.getValue("hello")).toBe("world");
  });

  it(`${this.description} getValue should return undefined if the value isn't there`, () => {
    table.insert("hello", "world");
    let value = table.getValue("blurp");

    expect(value).toBe(undefined);
  });

  it(`${this.description} resize should double list space`, () => {
    expect(table.list).toEqual(new Array(4));
    table.insert("hello", "world");

    expect(count(table.list)).toEqual(1);
    table.insert("ben", "schachter");
    table.insert("mousse", "schachter");
    table.insert("new", "mexico");
    table.insert("amazon", "google");

    expect(table.list.length).toEqual(8);
  });
});
