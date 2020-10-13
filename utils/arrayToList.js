const LinkedList = require("../linkedList");

function arrayToList(arr) {
  const first = arr.shift();
  const list = new LinkedList(first);

  for (let i = 0; i < arr.length; i++) {
    list.push(arr[i]);
  }

  return list;
}

module.exports = arrayToList;
