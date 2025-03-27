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

// Find the First Duplicate

// Problem: Write a function to return the first duplicate value in an array.
// Testcase 1:
// Input: [2, 1, 3, 5, 3, 2]
// Output: 3

let arr=[2, 1, 3, 5, 3, 2]
emp=0
for(i=0;i<arr.length;i++)
{
  for(j=i+1;j<arr.length;j++)
  {
    if(arr[i]==arr[j])
    {
      
    emp=arr[i]
    }
  }
}
console.log('The First duplicate in an array',emp)
// Pair Sum

// Problem: Write a function to find all pairs in an array whose sum is equal to a given target.
// Testcase 1:
// Input: [2, 4, 3, 5, 7, 8, 9], 7
// Output: [[4, 3], [2, 5]]

let arr=[2, 4, 3, 5, 7, 8, 9]
emp=[]
target=7
for(i=0;i<arr.length;i++)
{
  for(j=i+1;j<arr.length;j++)
  {
    if(arr[i]+arr[j]==target)
    {
      
    emp.push([arr[i],arr[j]])
    }
  }
}
console.log(emp)

// Move Zeros to End

// Problem: Write a function that moves all zeros in an array to the end while maintaining the order of other elements.
// Testcase 1:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

let arr=[0, 1, 0, 3, 12]
let res=[]
for(i=0;i<arr.length;i++)
{
  if(arr[i]!=0)
  {
    res.push(arr[i])
  }
}
for(j=0;j<arr.length;j++)
{
  if(arr[j]<1)
  {
    res.push(arr[j])
  }
}
console.log(res)


// Write a program that takes a number as input, print the sum of duplicate numbers in the given number.

// Testcase1	:  7473183
// Output     	:  10
// Explanation	: In the given number 747383, duplicate digits are 7 and 3 because
// they occurred more than once in the number. So the sum of 7 and 3 are 10.

let num=7473183
let str=String(num).split("").map(Number)
res=0
emp=[]
for(i of str)
{
  if(!emp.includes(i))
  {
    emp.push(i)
  }
}
// console.log(emp)
for(i of emp)
{
  count=0
  for(j of str)
  {
    if(i==j)
    {
      count++
      // console.log(i)
    }
  }
  if(count>1)
  {
      res+=i
    
  }
}

console.log(res)


















