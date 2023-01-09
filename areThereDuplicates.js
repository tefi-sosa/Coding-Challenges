// && Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Frequency counter aproach

function areThereDuplicates() {
  let counter = {}
  for (let val in arguments) {
    counter[arguments[val]] = (counter[arguments[val]] || 0) + 1
  }
  for (let key in counter) {
    if (counter[key] > 1) return true
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

// Short version using set

function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2(1, 2, 2)) // true 
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true 