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

// Write a program that takes array of numbers as input, among the numbers in array,
// print the numbers which forms a prime number by adding one to it.
// Print such numbers in the given array separated b spaces.

// Testcase1	:  [ 7, 4, 7, 23, 10 ]
// Output     	:  4 10

let arr=[ 7, 4, 7, 23, 10 ]
for(i of arr)
{
  fact=0
  i+=1
  for(j=2;j<i;j++)
  {
    if(i%j==0)
    {
      fact++
    }
  }
  if(fact==0)
  {
    
    i--
    console.log(i,'is formed number')
    
  }
}

// Write a program that takes array of numbers as input and a number as second input.
// Check the position of the factorial of the second input number in the given array.
// Print the position of it. If the factorial of given second input number is not presented in the 
// array then print factorial of  the number is not presented.

// Testcase1	:  [ 61, 4, 6, 7, 120 , 10 ]
let arr= [ 61, 4, 6, 7, 120 , 10 ]
let fact=1
let num=5
for(i=1;i<=num;i++)
{
  fact*=i
}
is_found=false
for(i in arr)
{
  if(arr[i]==fact)
  {
    is_found=true
    break
    
  }
  

}
if(is_found)
  {
    console.log('factorial:',fact,'is presented in  position NO:',i)
  }
  else
  {
    console.log(fact,'factorial Number is not present')
//   }
// Write a program that takes array of numbers as input, among the numbers in array, 
//   check how many numbers starts with the same digit and ends with the same digits.
//   Print the count of such kind of numbers in the given array.

// Testcase1	:  [ 34, 88, 423, 121, 2382, 10]
// Output     	:  3

let arr=[ 34, 88, 423, 121, 2382, 10]
let count=0

for(num of arr)
{
  let strNum=num.toString()
  let firstNum=strNum[0]
  let lastNum=strNum[strNum.length-1]
  if(firstNum==lastNum)
  {
    count++
  }
}
console.log(count,'Numbers present in array')


  // Convert the given Input Empty String into the given Output
  //   Testcase 1:
  //   Input : [ ]
  //   Output : [[1,2,3][4,5,6][7,8,9]]

let arr=[]
length=3
num=1

for(i=0;i<length;i++)
{
  res=[]
  for(j=0;j<length;j++)
  {
    res.push(num)
    num++
  }
  arr.push(res)
}
console.log(arr)

// Flatten a Nested Array

// Problem: Write a function to flatten a nested array into a single array.
// Testcase 1:Improvements :  Very slow in improving

// Target date for completion : 

// Input: [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]

let arr=[1, [2, [3, [4]], 5]]

function flattenarr(arr)
{
  let result=[]
  for(let i=0;i<arr.length;i++)
  {
    if(Array.isArray(arr[i]))
    {
      result.push(...flattenarr(arr[i]))
    }
    else
    {
      result.push(arr[i])
    }
  }
  
    return result
}
console.log(flattenarr(arr))
// Find Peak Element

// Problem: Write a function to find a peak element in an array.
// An element is a peak if it is not smaller than its neighbours.
// Testcase 1:
// Input: [1, 3, 20, 4, 1, 0]
// Output: 20

let arr=[1, 3, 20, 4, 1, 0]
peak=arr[0]
for(i=0;i<arr.length;i++)
{
  if(arr[i]>arr[i-1]&&arr[i]>arr[i+1])
  {
    if(arr[i]>peak)
    {
      peak=arr[i]
    }
  }
}
console.log('The peak element in array is',peak)

// Write a program that takes array of numbers are input, print the second duplicate number
// and it’s occurrence.

// Testcase1	:  [ 64, 1, 2, 7, 79, 7, 7, 1, 22]
// Output     	:  Second duplicate number is 7 and it is occurred 3 times
// Explanation	: In the given array [ 64, 1, 2, 7, 79, 7, 7, 1, 22], the second
// duplicate number is 7 and it is occurred for 3 times.

let arr=[ 64, 1, 2, 7, 79, 7, 7, 1, 22]
let maxcount=0
let firstDup=0
let secDup=0
for(i=0;i<arr.length;i++)
{
  count=1
  for(j=i+1;j<arr.length;j++)
  {
    if(arr[i]==arr[j])
    {
      count++
      secDup=firstDup
      firstDup=arr[i]
    }
  }
  if(count>maxcount)
  {
    maxcount=count
  }
}
console.log('The second duplicate num in array is:',secDup,'occurred:',maxcount,"times")


// Group Anagrams

// Problem: Write a function to group anagrams from an array of strings.
// Testcase 1:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]



let arr =["eat", "tea", "tan", "ate", "nat", "bat"]
let anagramsStr=[]
let checkout=[]

for(i=0;i<arr.length;i++)
{
  if(!checkout.includes(arr[i]))
  {
    let temp=[arr[i]]
    let str1=arr[i].split('').sort().join('')
    // console.log(temp,str1)
    for(j=i+1;j<arr.length;j++)
    {
      let str2=arr[j].split('').sort().join('')
      if(str1==str2)
      {
        temp.push(arr[j])
        checkout.push(arr[j])
      }
    }
    anagramsStr.push(temp)
  }
  
}


console.log(anagramsStr)












































