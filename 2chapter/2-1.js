// Side note. If we couldn't use the cache object here.
// we'd have to check every element on it's self. O(n^2) rather
// than the O(n) run time looping through the LL
// and constant time look up with the JS Object.

function removeDupes(list) {
  // This is our tmp buffer.
  const cache = {};
  let node = list.head;

  // Hold a reference to the last node so that if there's a duplicate
  // we can change it's next value to the next.next value.
  // skipping over duplicated value.
  let prev;

  while (node) {
    if (cache[[node.val]]) {
      prev.next = node.next ? node.next : null;
    } else {
      cache[[node.val]] = true;
      prev = node;
    }

    node = node.next;
  }

  return list;
}

module.exports = removeDupes;
