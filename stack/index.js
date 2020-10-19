const LinkedList = require("../linkedList");

// First in last out
class Stack {
  constructor(data) {
    this.data = new LinkedList(data);
    this.top = this.data.head;
  }

  // Remove the first element in the linkedList
  pop() {
    let old = this.data.shift();
    this.top = this.data.head;
    return old;
  }

  // Add item to the top of the linked list data structure
  push(itemToPush) {
    this.data.unshift(itemToPush);

    this.top = this.data.head;
    return this.top.val;
  }

  peek() {
    if (this.top.val) {
      return this.top.val;
    }
  }

  isEmpty() {
    return !this.top.val;
  }
}

module.exports = Stack;
