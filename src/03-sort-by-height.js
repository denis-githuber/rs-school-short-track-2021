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
  const ind = [];

  arr.forEach((element, index) => {
    if (element === -1) {
      ind.push(index);
    }
  });

  const arrSort = arr.sort((a, b) => {
    const ab = a;
    return ab - b;
  });

  const arrFilter = arrSort.filter((value) => {
    const val = value;
    return val > 0;
  });

  ind.forEach((element) => {
    arrFilter.splice(element, 0, -1);
  });

  return arrFilter;
}

module.exports = sortByHeight;
