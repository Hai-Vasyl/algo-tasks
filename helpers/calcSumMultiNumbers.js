function calcSumMultiNumbers(num) {
  let sumMultiNumbers = 0

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sumMultiNumbers += i
    }
  }

  return sumMultiNumbers
}

module.exports = calcSumMultiNumbers
