const Node = require("../node");

describe("Node", function () {
  let node;
  beforeAll(() => {
    node = new Node(1);
  });

  it(`${this.description} should return a node`, () => {
    expect(node).toHaveProperty("val");
    expect(node).toHaveProperty("next");
  });
});
