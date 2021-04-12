/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;

  String(n).split('').forEach((element, index, array) => {
    array.splice(index, 1);
    if (array.join('') > result) {
      result = array.join('');
    }
    array.splice(index, 0, element);
  });

  return Number(result);
}

module.exports = deleteDigit;
