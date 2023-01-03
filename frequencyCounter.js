// && Write a function called, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of value must be the same.

// O(n^2) complexity approach

function same (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] ** 2 === arr2[j]) {
        arr2.splice(j, 1)
      }
    }
  }
  if (arr2.length === 0) {
    return true
  }
  return false
}

console.log(same([1,2,3], [4,1,9]))

// O(n) complexity approach

function same1 (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same1([1,2,3], [4,1,9]))