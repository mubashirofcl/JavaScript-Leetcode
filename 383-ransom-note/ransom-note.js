/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = {};

  for (let char of magazine) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
};