const { expect } = require('@jest/globals');
const {
  moveZerosToRight,
  addValueToDigitsArray,
  validateDigitsArray,
} = require('./algorithms');

describe('algorithms', () => {
  describe('validateDigitsArray', () => {
    test('When array is [1,2,3] should not throw error', () => {
      expect(() => validateDigitsArray([1, 2, 3])).not.toThrowError();
    });
    test('When array is [-1,2,3] should has_invalid_digits throw error', () => {
      const expected = Error('has_invalid_digits');
      expect(() => validateDigitsArray([-1, 2, 3])).toThrowError(expected);
    });
    test('When array length is more than 100 should throw length_is_more_than_100 error', () => {
      const array = new Array(101);
      const expected = Error('length_is_more_than_100');
      expect(() => validateDigitsArray(array)).toThrowError(expected);
    });
  });

  describe('moveZerosToRight', () => {
    test.each([
      [[], []],
      [[1], [1]],
      [
        [0, 1],
        [1, 0],
      ],
      [
        [1, 0, 2, 0, 4, 0, 5],
        [1, 2, 4, 5, 0, 0, 0],
      ],
      [
        [1, 2, 4, 0, 0, 0],
        [1, 2, 4, 0, 0, 0],
      ],
      [
        [0, 0, 0, 1, 2, 4],
        [1, 2, 4, 0, 0, 0],
      ],
      [
        [4, 8, 0, 9, 2, 5, 0, 3, 3, 0],
        [4, 8, 9, 2, 5, 3, 3, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 0, 9, 2, 5, 0, 3, 3, 0],
        [4, 8, 9, 2, 5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
    ])('When input is %j should return %j', (input, expected) => {
      expect(moveZerosToRight(input)).toEqual(expected);
    });
  });
  describe('addValueToDigitsArray', () => {
    describe('When value to add is 1', () => {
      test.each([
        [[], []],
        [[1], [2]],
        [[9], [1, 0]],
        [
          [1, 2],
          [1, 3],
        ],
        [
          [1, 9],
          [2, 0],
        ],
        [
          [2, 0],
          [2, 1],
        ],
        [
          [3, 9],
          [4, 0],
        ],
        [
          [9, 9],
          [1, 0, 0],
        ],
        [
          [2, 3, 9],
          [2, 4, 0],
        ],
        [
          [9, 9, 9],
          [1, 0, 0, 0],
        ],
        [
          [4, 8, 9, 2, 5, 3, 3],
          [4, 8, 9, 2, 5, 3, 4],
        ],
        [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 9, 2, 5, 3, 3],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 9, 2, 5, 3, 4],
        ],
        [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 9, 9, 9, 9],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
        ],
      ])('When input is %j should return %j', (input, expected) => {
        expect(addValueToDigitsArray(input, 1)).toEqual(expected);
      });
    });
  });
});
