const Node = require("../node");

class LinkedList {
  // head is a value
  constructor(head) {
    this.head = new Node(head);
  }

  push(val) {
    let node = this.head;
    let count = 1;
    while (node.next) {
      count++;
      node = node.next;
    }

    node.next = new Node(val);
    return count;
  }

  shift() {
    let oldHead = this.head;

    this.head = this.head.next;

    return oldHead.val;
  }

  pop() {
    let next;
    let node = this.head;

    while (node.next) {
      next = node.next;

      if (!next.next) {
        node.next = null;
        return next.val;
      }

      node = node.next;
    }
  }

  remove(idx) {
    let node = this.head;
    let prev;
    let count = 1;

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    prev = this.head;
    while (node) {
      node = node.next;
      if (idx === count + 1) {
        prev.next = node.next;
        node.next = null;
        return;
      }

      prev = prev.next;
      count++;
    }
  }

  get length() {
    let node = this.head;
    let count = 0;

    if (this.head) {
      count = 1;
    }

    while (node.next) {
      count++;
      node = node.next;
    }

    return count;
  }

  findByIndex(idx) {
    let count = 0;
    let node = this.head;

    while (node.next) {
      if (count === idx) {
        return node.val;
      }
      count++;
      node = node.next;
    }

    if (count === idx) {
      return node.val;
    } else {
      return null;
    }
  }
}

module.exports = LinkedList;
