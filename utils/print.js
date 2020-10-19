const print = (cb = console.log) => (list) => {
  let node = list.head;
  while (node) {
    // Big log energy
    cb(node.val);
    node = node.next;
  }
};

module.exports = print;
