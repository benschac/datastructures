const LinkedList = require("../linkedList");

// TODO: write with bsd next
class HashTable {
  constructor() {
    this.list = new Array(4);
    this.availableIndex = this.list.length;
    return this;
  }

  hash(key) {
    let hash = 0,
      i,
      chr;
    for (i = 0; i < key.length; i++) {
      chr = key.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }

    hash = Math.abs(hash);
    return hash;
  }

  getIndex(key) {
    return this.hash(key) % this.list.length;
  }

  getValue(key) {
    let idx = this.getIndex(key);
    let slot = this.list[idx];

    if (!slot || !slot.head) {
      return;
    }

    if (slot.head) {
      slot = slot.head;
      while (slot) {
        // if the key matches return the value
        if (slot.val.key === key) {
          return slot.val.value;
        }

        // continue iterating through the linkedList
        // until we find our key
        slot = slot.next;
      }
    }
  }

  resize() {
    let double = this.list.length * 2;
    let oldList = this.list;
    this.list = Array(double);

    oldList.forEach((list) => {
      if (list) {
        list = list.head;

        // Look through every linked list and
        // assign new slot in the doubled list.
        while (list) {
          let idx = this.getIndex(list.val.key);

          if (this.list[idx]) {
            this.list[idx].insert({ key: list.val.key, value: list.val.value });
          } else {
            this.list[idx] = new LinkedList({
              key: list.val.key,
              value: list.val.value,
            });
          }

          list = list.next;
        }
      }
    });

    this.availableIndex = this.list.length;
  }

  insert(key, value) {
    let idx = this.getIndex(key);
    let slot = this.list[idx];

    if (slot) {
      while (slot.next) {
        // Go to the end of the linkedList
        slot = slot.next;
      }

      slot.push({ key, value });
    } else {
      this.availableIndex--;
      this.list[idx] = new LinkedList({ key, value });
    }

    if (10 * (this.availableIndex / this.list.length) < 5) {
      this.resize();
    }

    return this.list;
  }
}

module.exports = HashTable;
