import checkNaturNumber from "./helpers/checkNaturNumber.js"
import calcSumMultiNumbers from "./helpers/calcSumMultiNumbers.js"
import isGroupInGroups from "./helpers/isGroupInGroups.js"

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
