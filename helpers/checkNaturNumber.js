export default function checkNaturNumber(num) {
  let _num = typeof num === "string" ? parseInt(num.trim()) : num
  if (typeof _num !== "object" && typeof _num !== "boolean" && _num) {
    return _num < 0 ? -_num : _num
  }
  throw new Error(
    `Checking natural number error: Argument is incorrect or empty`
  )
}
