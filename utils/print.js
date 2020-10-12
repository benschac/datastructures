function print(list) {
  let node = list.head;
  while (node.next) {
    // Big log energy
    console.log(node.val);
    node = node.next;
  }

  // Lol last node in da clurb
  console.log(node.val);
}

module.exports = print;
