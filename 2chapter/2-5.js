const LinkedList = require("../linkedList");

function sumLists(list1, list2) {
  let remainder = 0;
  let result;

  list1 = list1.head;
  list2 = list2.head;

  while (list1 || list2) {
    if (!list1) {
      list1 = { val: 0, next: null };
    }

    if (!list2) {
      list2 = { val: 0, next: null };
    }

    let rawSum = list1.val + list2.val + remainder;

    remainder = Math.floor(rawSum / 10);
    rawSum = remainder ? rawSum % 10 : rawSum;

    if (!result) {
      result = new LinkedList(rawSum);
    } else {
      result.push(rawSum);
    }

    list1 = list1.next;
    list2 = list2.next;
  }

  return result;
}

module.exports = sumLists;
