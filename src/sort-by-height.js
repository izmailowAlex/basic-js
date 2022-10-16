const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = [];
  let arr3 = [];
  for (let num of arr) {
      if (num == -1) continue;
      else {
          arr2.push(num);
      }
  }
  arr2.sort(function(a, b) {
      return a - b;
  });
  for (let num of arr) {
      if (num == -1) {
          arr3.push(num);
          continue;
      }
      else {
          num = arr2.shift();
          arr3.push(num);
      }
  }
  return arr3;
}

module.exports = {
  sortByHeight
};
