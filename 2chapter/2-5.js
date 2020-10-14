const LinkedList = require("../linkedList");

// Runtime in O(n)
// We need to iterate through number linked list once n times.

// Space O(n) --> we're inserting n + 1 values into a linked list to return

// TODO / HOMEWORK
// Write this function recursively
function sumLists(list1, list2) {
  let remainder = 0;
  let result;

  if (!list1 || !list1.head) {
    list1 = { val: 0, next: null };
  } else {
    list1 = list1.head;
  }

  if (!list2 || !list2.head) {
    list2 = { val: 0, next: null };
  } else {
    list2 = list2.head;
  }

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
