/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let reduceArr = String(n).split('');

  String(n).split('').forEach(() => {
    if (reduceArr.length > 1) {
      reduceArr = String(reduceArr.reduce((curVal, val) => {
        const cur = curVal;
        return Number(cur) + Number(val);
      })).split('');
    }
  });

  return Number(reduceArr.join(''));
}

module.exports = getSumOfDigits;
