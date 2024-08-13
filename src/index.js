const digits = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};

const pastTen = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};

const tens = {
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
};


module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    const hundred = Math.trunc(number / 100) > 0 ? `${digits[Math.trunc(number / 100)]} hundred ` : '';
    const remainder100 = (number % 100);
    const quotientRemainder100By10 = Math.trunc(remainder100 / 10);
    const dozen = quotientRemainder100By10 > 1 ? `${tens[quotientRemainder100By10]} ` : quotientRemainder100By10 === 1 ? `${pastTen[remainder100]}` : '';
    const digit = (quotientRemainder100By10 > 1 || quotientRemainder100By10 == 0) && remainder100 > 0 ? `${digits[remainder100 % 10]}` : '';

    return (hundred + dozen + digit).trim();
}

