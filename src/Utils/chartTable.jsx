const pairMap = {
  0: 5,
  1: 6,
  2: 7,
  3: 8,
  4: 9,
  5: 0,
  6: 1,
  7: 2,
  8: 3,
  9: 4,
};

export const isRepeatingDigits = (num) => {
  const str = num.toString().padStart(2, "0");
  return str[0] === str[1];
};

export const isPairPattern = (num) => {
  const str = num.toString().padStart(2, "0");
  const first = parseInt(str[0], 10); // converts the first character from a string (like "1") into a number (1).
  // you can also use alternatives like Number(str[0]) good for single digits.
  // +str[0] - + converts string to number type shorter but less clear to beginners.
  const second = parseInt(str[1], 10);
  return pairMap[first] === second;
};

// Combined check
export const shouldHighlight = (num) =>
  isRepeatingDigits(num) || isPairPattern(num);
