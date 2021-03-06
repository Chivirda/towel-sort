
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arguments.length || matrix.length === 0) return [];

  let sortedArray = [];
  matrix.forEach((item, index) => {
    if (index % 2 !== 0) {
      for (let i = item.length - 1; i >= 0; i--) {
        sortedArray.push(item[i]);
      }
    }

    else Array.prototype.push.apply(sortedArray, item);
  });

  return sortedArray;
}
