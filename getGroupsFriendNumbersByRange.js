const checkNaturNumber = require("./helpers/checkNaturNumber.js")
const calcSumMultiNumbers = require("./helpers/calcSumMultiNumbers.js")
const isGroupInGroups = require("./helpers/isGroupInGroups.js")

// два натуральних числа називають дружніми,
// якщо кожне з них дорівнює сумі всіх дільників другого,
//  крім самого цього числа.
// Знайти всі пари дружніх чисел, які лежать в діапазоні від 200 до 300

function getGroupsFriendNumbersByRange(from, to) {
  const _from = checkNaturNumber(from)
  const _to = checkNaturNumber(to)
  const result = []

  for (let i = _from; i <= _to; i++) {
    const potentialFriend = calcSumMultiNumbers(i)
    const potentialFriendFriend = calcSumMultiNumbers(potentialFriend)
    if (i === potentialFriendFriend && i !== potentialFriend) {
      const group = [i, potentialFriend]
      const isExists = isGroupInGroups(result, group)

      if (!isExists) {
        result.push(group)
      }
    }
  }

  return result
}

console.log(getGroupsFriendNumbersByRange(200, 300)) // [[200, 284]]
// console.log(getGroupsFriendNumbersByRange(1, 10000)) // [[200, 284], [], ...]
// console.log(getGroupsFriendNumbersByRange(500, 2000)) // [[ 1184, 1210 ]]
// console.log(getGroupsFriendNumbersByRange(500, {})) // error
// console.log(getGroupsFriendNumbersByRange(500, "2300kl")) // [[ 1184, 1210 ]]
