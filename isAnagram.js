// && Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// O(n)^2 complexity approach

function isAnagram (firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false
  }

  let counter = [ ...secondString]
  console.log(counter)

  for (let i = 0; i < firstString.length; i++) {
    for (let j = 0; j < firstString.length; j++) {
      if (firstString[i] === counter[j]) {
       counter.splice(j, 1)
      }
    }
  }

  if (counter.length === 0) {
    return true    
  } else {
    return false
  }

}

console.log(isAnagram("rat", "car"))
console.log(isAnagram("azz", "zza"))
console.log(isAnagram("iceman", "cinema"))

// O(n) complexity approach

function isAnagram2 (firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false
  }

  let letterCounter = {}

  for (let value of firstString) {
    letterCounter[value] = (letterCounter[value] || 0) + 1
  }

  for (let value of secondString) {
    if (!letterCounter[value]) {
      return false
    } else {
      letterCounter[value] -= 1
    }
  }

  return true
}

console.log(isAnagram2("rat", "car"))
console.log(isAnagram2("azz", "zza"))
console.log(isAnagram2("iceman", "cinema"))