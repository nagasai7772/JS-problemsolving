
# // Rotate an Array

# // Problem: Write a function that rotates an array to the right by a given number of steps.
# // Testcase 1:
# // Input: [1, 2, 3, 4, 5], 2
# // Output: [4, 5, 1, 2, 3]

arr=[1,2,3,4,5]
rotate=2
arr2=[]
for i in range(len(arr)-rotate,len(arr),1):
  arr2.append(arr[i])
for j in range(0,len(arr)-rotate,1):
    arr2.append(arr[j])
print(arr2)  
# // Intersection of Two Arrays

# // Problem: Write a function that returns the common elements between two arrays.
# // Testcase 1:
# // Input: [1, 2, 3], [2, 3, 4]
# // Output: [2, 3]

arr1=[1,2,3]
arr2=[2,3,4]
common=[]
for i in range(0,len(arr1)):
  for j in range(0,len(arr2)):
    if arr1[i]==arr2[j]:
      common.append(arr1[i])
print(common)      

# // Find Missing Number

# // Problem: Given an array of consecutive numbers with one missing, find the missing number.
# // Testcase 1:
# // Input: [1, 2, 4, 5]
# // Output: [3]

arr=[1,2,4,5]
arr2=[]
for i in range(min(arr), max(arr) + 1):
  if i not in arr:
    arr2.append(i)
print(arr2)    

# // Problem: Write a function to find the maximum product of two elements in an array.
# // Testcase 1:
# // Input: [3, 5, -2, 8, 11]
# // Output: 8 * 11 → 88

arr=[3, 5, -2, 8, 11]
max=0
secmax=0

for i in range(0,len(arr)):
  if arr[i]>max:
    secmax=max
    max=arr[i]
  elif secmax<max and i<max:
    secmax=i
print(secmax,max)  
product=max*secmax
print('The product of elements in array',product)
  # // Find the First Duplicate

# // Problem: Write a function to return the first duplicate value in an array.
# // Testcase 1:
# // Input: [2, 1, 3, 5, 3, 2]
# // Output: 3

# arr=[2, 1, 3, 5, 3, 2]
# emp=0
# for i in range(len(arr)):
#   for j in range(i+1,len(arr)):
#     if arr[i]==arr[j]:
#       emp=arr[i]
      
      
# print('The first duplicate in array is',emp)      

# // Pair Sum

# // Problem: Write a function to find all pairs in an array whose sum is equal to a given target.
# // Testcase 1:
# // Input: [2, 4, 3, 5, 7, 8, 9], 7
# // Output: [[4, 3], [2, 5]]

arr=[2, 4, 3, 5, 7, 8, 9]
target=7
emp=[]
for i in range(len(arr)):
  for j in range(i+1,len(arr)):
    if arr[i]+arr[j]==target:
      emp.append([arr[i],arr[j]])
print(emp)  
  
# // Write a program that takes array of numbers as input, among the numbers in array,
# // print the numbers which forms a prime number by adding one to it.
# // Print such numbers in the given array separated b spaces.

# // Testcase1	:  [ 7, 4, 7, 23, 10 ]
# // Output     	:  4 10

arr=[ 7, 4, 7, 23, 10 ]
for i in range(len(arr)):
  fact=0
  arr[i]+=1
  for j in range(2,arr[i]-1):
    if arr[i]%j==0:
      fact+=1
  if fact==0:
    arr[i]=arr[i]-1
    print(arr[i],'is forms a prime number')
  


# // Write a program that takes array of numbers as input and a number as second input.
# // Check the position of the factorial of the second input number in the given array.
# // Print the position of it. If the factorial of given second input number is not presented in the 
# // array then print factorial of  the number is not presented.

# // Testcase1	:  [ 61, 4, 6, 7, 120 , 10 ]  

fact=1
arr=[ 61, 4, 6, 7, 120 , 10 ]  
num=5
for i in range(1,num+1):
  fact=fact*i
# print(fact)
is_found=False
for i in range(len(arr)):
  if(arr[i]==fact):
    is_found=True
    break
if(is_found):
  print('factorial:',fact,'is presented in position',i)
else:
  print("factorial:",fact,'is Not presented in list')
  
# // Write a program that takes array of numbers as input, among the numbers in array, 
# //   check how many numbers starts with the same digit and ends with the same digits.
# //   Print the count of such kind of numbers in the given array.

# // Testcase1	:  [ 34, 88, 423, 121, 2382, 10]
# // Output     	:  3  
  
  
arr=  [ 34, 88, 423, 121, 2382, 10]
count=0
for i in range(len(arr)):
  strNum=str(arr[i])
  firstNum=strNum[0]
  lastNum=strNum[-1]
  if firstNum==lastNum:
    count+=1
print(count,'numbers presented in list')  
  
  
  # // Convert the given Input Empty String into the given Output
#   //   Testcase 1:
#   //   Input : [ ]
#   //   Output : [[1,2,3][4,5,6][7,8,9]]

arr=[]
num=1
length=3
for i in range(length):
  emp=[]
  for j in range(length):
    emp.append(num)
    num+=1
  arr.append(emp)
print(arr)

# // Flatten a Nested Array

# // Problem: Write a function to flatten a nested array into a single array.
# // Testcase 1:Improvements :  Very slow in improving

# // Target date for completion : 

# // Input: [1, [2, [3, [4]], 5]]
# // Output: [1, 2, 3, 4, 5]

arr = [1, [2, [3, [4]], 5]]

def flattenarr(arr):
    resultarr = []
    for i in arr:
        if isinstance(i, list): 
            resultarr.extend(flattenarr(i))  
        else:
            resultarr.append(i)
    return resultarr

print(flattenarr(arr))  


#   // Problem: Write a function to find a peak element in an array.
# // An element is a peak if it is not smaller than its neighbours.
# // Testcase 1:
# // Input: [1, 3, 20, 4, 1, 0]
# // Output: 20
arr=[1, 3, 20, 4, 1, 0]
peak=0
for i in range(len(arr)):
  if arr[i]>arr[i-1] and arr[i]>arr[i+1]:
    if arr[i]>peak:
      peak=arr[i]
      
print('The peak element in list is ',peak)    
















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  











