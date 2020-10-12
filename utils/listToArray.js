function listToArray(list) {
  list = list.head;
  let array = [];

  while (list.next) {
    array = [...array, list.val];

    list = list.next;
  }

  array = [...array, list.val];

  return array;
}

module.exports = listToArray;
