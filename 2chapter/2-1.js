// Side note. If we couldn't use the cache object here.
// we'd have to check every element on it's self. O(n^2) rather
// than the O(n) run time looping through the LL
// and constant time look up with the JS Object.

function removeDupes(list) {
  // This is out tmp buffer.
  const cache = {};
  let node = list.head;
  let prev;

  while (node.next) {
    if (!cache[[node.val]]) {
      cache[[node.val]] = true;
      prev = node;
    } else if (cache[[node.val]]) {
      prev.next = node.next ? node.next : null;
    }

    node = node.next;
  }

  // the last one
  if (cache[[node.val]]) {
    prev.next = null;
  }

  return list;
}

module.exports = removeDupes;
