function Node(val, next) {
  this.val = val;
  this.next = next;
}

class LinkedList {
  // head is a value
  constructor(head) {
    this.head = new Node(head);
  }

  // get this() {
  //   return this.head;
  // }

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

    return node.val;
  }
}

module.exports = LinkedList;
