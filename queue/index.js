const LinkedList = require("../linkedList");

// Last in first out
class Queue {
  constructor(data) {
    this.data = new LinkedList(data);
  }

  add(item) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();

    return;
  }

  poll() {}

  element() {}
}

module.exports = Queue;
