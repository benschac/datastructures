function deleteMiddleNode(list) {
  const midPoint = Math.ceil(list.length / 2);
  list.remove(midPoint);
}

module.exports = deleteMiddleNode;
