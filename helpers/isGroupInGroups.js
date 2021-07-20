export default function isGroupInGroups(groups, group) {
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
