const print = (cb = console.log) => (list) => {
  let node = list.head;
  while (node.next) {
    // Big log energy
    cb(node.val);
    node = node.next;
  }

  // Lol last node in da clurb
  cb(node.val);
};

module.exports = print;
