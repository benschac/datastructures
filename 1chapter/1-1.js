function isUnique(str) {
  let cache = {};

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (!cache[el]) {
      cache[el] = true;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isUnique;
