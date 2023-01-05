// && Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of strNum1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of strNum2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false