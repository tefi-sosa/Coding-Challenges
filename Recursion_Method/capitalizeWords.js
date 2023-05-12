// && Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()]
  }
  let result = capitalizeWords(arr.slice(0,-1))
  let string = arr.slice(arr.length - 1)[0].toUpperCase()
  result.push(string)
  return result
}

let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']