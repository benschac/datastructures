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
    table.insert("prolific", "interactive");
    table.insert("facebook", "fake news");
    table.insert("boop", "blerp");
    table.insert("blemp", "blop");
    table.insert("blemp", "blop");
    table.insert("bob", "hi");
    let idx = table.getIndex("sean");

    let slot = table.list[idx].head;

    while (slot.next) {
      slot = slot.next;
    }

    table.list[2].shift();
    table.list[2].push({ key: "test", value: "123" });
    table.list[2].push({ key: "hello", value: "world" });
    table.insert({ key: "hello", value: "world" });

    expect(table.getValue("hello")).toBe("world");

    expect(slot).toHaveProperty("val.key", "sean");
    expect(table.getValue("sean")).toEqual("smith2");
    expect(count(table.list)).toEqual(6);
  });

  it(`${this.description} insert should push to end of linkedlist`, () => {
    jest.spyOn(table, "resize").mockImplementation(() => 2);

    let node;

    table.insert("hello", "world");
    table.insert("world", "hello");
    table.insert("stanley", "star");

    node = table.list[2].head;
    while (node.next) {
      node = node.next;
    }

    expect(node.val).toEqual({ key: "stanley", value: "star" });
  });

  it(`${this.description} resize should double the array size`, () => {
    expect(table.list.length).toBe(4);
    table.insert("hello", "world");
    table.resize();

    expect(table.list.length).toBe(8);
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
