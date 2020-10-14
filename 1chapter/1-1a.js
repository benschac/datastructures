// Use two pointers.
// if there's a match we know there's a duplicate value
function isUniqueNoDataStructure(str) {
  for (let i = 0; i < str.length; i++) {
    const slow = str[i];

    for (let j = i + 1; j < str.length - 1; j++) {
      const fast = str[j];

      if (slow === fast) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isUniqueNoDataStructure;
