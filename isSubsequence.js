// && Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let leftPointer = 0
  let rightPointer = 0
  while (leftPointer < str1.length) {
    if(str2.length < rightPointer) return false
    if(str1[leftPointer] === str2[rightPointer]) leftPointer++
    rightPointer++
  }
  return true
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)