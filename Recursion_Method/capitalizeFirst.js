// & Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)]
  }
  const result = capitalizeFirst(arr.slice(0, -1))
  const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1)
  result.push(string)
  return result
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']

function capitalizeFirst1 (arr) {
  let result = []
  arr.forEach(element => {
    result.push(element[0].toUpperCase() + element.slice(1))
  })
  return result
}

console.log(capitalizeFirst1(['car','taco','banana'])) // ['Car','Taco','Banana']
console.log(capitalizeFirst1(['car']))