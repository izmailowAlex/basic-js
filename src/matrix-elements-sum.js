const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
    let arr = new Array();

    for (let i = 0; i < matrix.length-1; i++) {
      if (i === 0) arr.push(...matrix[i]);
      
      for (let j = 0; j < matrix[i].length; j++) {
        const num = matrix[i][j]
        const numNextRow = matrix[i+1][j]
        if (num !== 0) {
            arr.push(numNextRow);
        }
      }
    }
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
      res += arr[i];
    }
    
    return res;
}

module.exports = {
  getMatrixElementsSum
};
