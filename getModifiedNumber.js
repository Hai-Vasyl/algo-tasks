const checkNaturNumber = require("./helpers/checkNaturNumber.js")

// Дано натуральне число n. Обчислити 1*2 + 2*3*4 +...+ n*(n+1)*...2n

function getModifiedNumber(num) {
  let _num = checkNaturNumber(num)
  let result = 0
  let startGroupNum = 1
  let group = 1
  for (let index = 1; index <= _num; index++) {
    group *= index
    const isLastInGroupIndex = index === 2 * startGroupNum
    const isLastIndex = index === _num
    if (isLastInGroupIndex || isLastIndex) {
      result += group
      if (isLastInGroupIndex && isLastIndex) {
        result += index
      } else {
        startGroupNum = group = index
      }
    }
  }
  return result
}

console.log(getModifiedNumber("02asd")) // 4
// console.log(getModifiedNumber({})) // error
// console.log(getModifiedNumber("2")) // 4
// console.log(getModifiedNumber("rty2")) // error
// console.log(getModifiedNumber("  7")) // 866
// console.log(getModifiedNumber(true)) // error
// console.log(getModifiedNumber(false)) // error
// console.log(getModifiedNumber(null)) // error
// console.log(getModifiedNumber(4)) // 30

module.exports = getModifiedNumber
