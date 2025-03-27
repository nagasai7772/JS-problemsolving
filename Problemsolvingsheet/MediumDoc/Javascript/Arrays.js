// Rotate an Array

// Problem: Write a function that rotates an array to the right by a given number of steps.
// Testcase 1:
// Input: [1, 2, 3, 4, 5], 2
// Output: [4, 5, 1, 2, 3]

let arr=[1,2,3,4,5]
let rotate=2
let arr2=[]
for(i=arr.length-rotate;i<arr.length;i++)
{
  arr2.push(arr[i])
}
for(j=0;j<arr.length-rotate;j++)
{
  arr2.push(arr[j])
}
console.log(arr2)

// Intersection of Two Arrays

// Problem: Write a function that returns the common elements between two arrays.
// Testcase 1:
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]

let arr1=[1,2,3]
let arr2=[2,3,4]
common=[]
for(i of arr1)
{
  for(j of arr2)
  {
    if(i==j)
    {
      common.push(i)
    }
  }
}
console.log(common)

// Find Missing Number

// Problem: Given an array of consecutive numbers with one missing, find the missing number.
// Testcase 1:
// Input: [1, 2, 4, 5]
// Output: [3]

let arr=[1,2,4,5]
arr2=[]
for(i=arr[0];i<=arr[arr.length-1];i++)
{
  if(!arr2.includes(i))
  {
    arr2.push(i)
  }
  
}
console.log(arr2)


// Find the Maximum Product of Two Elements

// Problem: Write a function to find the maximum product of two elements in an array.
// Testcase 1:
// Input: [3, 5, -2, 8, 11]
// Output: 8 * 11 → 88



let arr=[3,5,-2,8,11]
let max=0
secmax=0
for(i of arr)
{
  if(i>max)
  {
    secmax=max
    max=i
  }
  else if(secmax<max&&i<max)
  {
    secmax=i
  }
}
product=max*secmax
console.log(max,secmax)
console.log('The product of two elements in array',product)










