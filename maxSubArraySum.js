// && Write a function called maxSubarraySum wich accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum (arr, n) {
 let maxSum = 0
 let tempSum = 0
 if (arr.length < n) return null
 for (let i = 0; i < arr.length; i++) {
  if (i !== arr.length - n + 1) {
    tempSum = arr[i] + arr[i + 1] + arr[i + 2] 
    if (tempSum > maxSum) {
      maxSum = tempSum
    }   
  }
 }
 return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

// Another aproach

function maxSubarraySum2(arr, n){
  let maxSum = 0
  let tempSum = 0
  if (arr.length < n) return null
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3))