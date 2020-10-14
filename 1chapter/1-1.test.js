let isUnique = require("./1-1");
let isUniqueNoDataStructure = require("./1-1a");

describe("isUnique", function () {
  let isUnique;
  beforeEach(() => {
    isUnique = jest.fn(require("./1-1"));
  });

  it(`${this.description}: should return true from 'ben'`, () => {
    expect(isUnique("ben")).toBe(true);
    expect(isUniqueNoDataStructure("ben")).toBe(true);
    expect(isUnique.mock.calls[0][0]).toBe("ben");
  });

  it(`${this.description}: should return true from ''`, () => {
    expect(isUnique("")).toBe(true);
    expect(isUniqueNoDataStructure("")).toBe(true);
    expect(isUnique.mock.calls[0][0]).toBe("");
  });

  it(`${this.description}: should return false for benny`, () => {
    expect(isUnique("benny")).toBe(false);
    expect(isUniqueNoDataStructure("benny")).toBe(false);
    expect(isUnique.mock.calls[0][0]).toBe("benny");
  });
});
