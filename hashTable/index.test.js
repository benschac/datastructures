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

  it(`${this.description} getValue should return the correct value`, () => {
    table.insert("hello", "world");

    expect(table.getValue("hello")).toBe("world");
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
