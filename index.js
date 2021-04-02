const { moveZerosToRight, addValueToDigitsArray } = require('./algorithms');

const applyAlgorithms = (digits = []) => {
  const firstResult = moveZerosToRight(digits);
  console.log(firstResult);
  const firstResultWithoutZeros = firstResult.filter((d) => d !== 0);
  const secondResult = addValueToDigitsArray(firstResultWithoutZeros, 1);
  console.log(secondResult);
};

applyAlgorithms([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]);
