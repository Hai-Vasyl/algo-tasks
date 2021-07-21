const checkNaturNumber = require("./helpers/checkNaturNumber.js")

// Дано натуральне число n. Обчислити добуток перших n співмножників. 1/2 + 3/4 + ...

function multiplyFractionsByNumber(num) {
  let _num = checkNaturNumber(num)
  let result = 0
  for (let index = 1; index <= _num; index += 2) {
    const indexNext = index + 1
    if (indexNext <= _num) {
      result += index / indexNext
    }
  }
  return result
}

console.log(multiplyFractionsByNumber("2")) // 0.5
// console.log(multiplyFractionsByNumber({})) // error
// console.log(multiplyFractionsByNumber("009asd")) // 2.9583333333333335
// console.log(multiplyFractionsByNumber("  3")) // 0.5
// console.log(multiplyFractionsByNumber(2)) // 0.5
// console.log(multiplyFractionsByNumber(false)) // error
// console.log(multiplyFractionsByNumber(true)) // error
