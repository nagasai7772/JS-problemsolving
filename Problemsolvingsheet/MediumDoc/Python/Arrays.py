
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
  












