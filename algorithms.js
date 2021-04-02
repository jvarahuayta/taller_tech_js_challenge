const validateDigitsArray = (digits = []) => {
  if (digits.length > 100) throw Error('length_is_more_than_100');
  if (digits.some((d) => d > 9 || d < 0)) throw Error('has_invalid_digits');
};

const moveZerosToRight = (digits = []) => {
  validateDigitsArray(digits);
  return digits.filter((d) => d !== 0).concat(digits.filter((d) => d === 0));
};

const addValueToDigitsArray = (digits = [], value = 1) => {
  validateDigitsArray(digits);
  if (!digits.length) return digits;
  const arrayWithNewValues = [];
  let carry, index;
  for (index = digits.length - 1; index >= 0; index--) {
    const isLastDigit = index === digits.length - 1;
    const currentDigit = digits[index];
    const newDigit = !isLastDigit ? currentDigit + carry : currentDigit + value;
    const rightNewDigit = newDigit % 10;
    carry = Math.floor(newDigit / 10);
    arrayWithNewValues.unshift(rightNewDigit);
    if (!carry) {
      break;
    }
  }
  if (carry) {
    const carryAsDigits = String(carry)
      .split('')
      .map((i) => parseInt(i));
    arrayWithNewValues.unshift(...carryAsDigits);
  }
  return digits.slice(0, Math.max(index, 0)).concat(arrayWithNewValues);
};

module.exports = {
  validateDigitsArray,
  moveZerosToRight,
  addValueToDigitsArray,
};
