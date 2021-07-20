// Дано натуральне число n. Обчислити 1*2 + 2*3*4 +...+ n*(n+1)*...2n

function getModifiedNumber(num) {
  try {
    let _num = typeof num === "string" ? num.trim() : num
    if (_num) {
      _num = parseInt(_num)
      if (!isNaN(_num)) {
        _num = _num < 0 ? -_num : _num

        let result = 0
        let startGroupNum = (group = 1)
        for (let index = 1; index <= _num; index++) {
          group *= index
          if (index === 2 * startGroupNum || index === _num) {
            result += group
            startGroupNum = group = index
          }
        }
        return result
      }
      throw new Error(`Argument is not a number`)
    }
    throw new Error(`Argument is not a defined`)
  } catch (error) {
    throw new Error(error.message)
  }
}

console.log(getModifiedNumber("-4"))

// Дано натуральне число n. Обчислити добуток перших n співмножників. 1/2 + 3/4 + ...

function multiplyFractionsByNumber(num) {
  try {
    let _num = typeof num === "string" ? num.trim() : num < 0 ? -num : num
    if (_num) {
      _num = parseInt(_num)
      if (!isNaN(_num)) {
        let result = 0
        for (let index = 1; index <= _num; index += 2) {
          const indexNext = index + 1
          if (indexNext <= _num) {
            result += index / indexNext
          }
        }
        return result
      }
      throw new Error(`Argument is not a number`)
    }
    throw new Error(`Argument is not a defined`)
  } catch (error) {
    throw new Error(error.message)
  }
}

// console.log(multiplyFractionsByNumber(7))

// 1/2 + 3/4 = 0.5 + 1.25
// 1/2 + 3/4 + 5/6 + 7/8 = 2.95833333333
// 1/2 + 3/4 + 5/6 = 2.08333333333

function calcSumMultiNumbers(num) {
  let sumMultiNumbers = 0

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sumMultiNumbers += i
    }
  }

  return sumMultiNumbers
}

function isGroupItemExists(groups, group) {
  let isExists = false

  outerLoop: for (let i = 0; i < groups.length; i++) {
    groups[i] = groups[i].sort()
    group = group.sort()
    for (let j = 0; j < groups[i].length; j++) {
      if (groups[i][j] === group[j]) {
        isExists = true
        break outerLoop
      }
    }
  }

  return isExists
}

function genGroupsFriendNumbersByRange(from, to) {
  const result = []

  for (let i = from; i <= to; i++) {
    const potentialFriend = calcSumMultiNumbers(i)
    const potentialFriendFriend = calcSumMultiNumbers(potentialFriend)
    if (i === potentialFriendFriend && i !== potentialFriend) {
      const group = [i, potentialFriend]
      const isExists = isGroupItemExists(result, group)

      if (!isExists) {
        result.push(group)
      }
    }
  }

  return result
}

// console.log(getFriendNumbersByRange(200, 10000))
