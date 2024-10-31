const reverse = string => {
  return string.split('').reverse().join('');
};

const average = array =>
  array.length === 0
    ? 0
    : array.reduce((acc, cur) => acc + cur, 0) / array.length;

module.exports = {
  reverse,
  average,
};
