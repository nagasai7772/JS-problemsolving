

# Write a program that takes number of rows as input and print below respective pattern.

# Testcase1	:  Enter number of rows: 4
# Output     	: 

# 1
# 1 2
# 1 2 3
# 1 2 3 4

rows=4
for i in range(1,rows+1):
  s=''
  for j in range(1,i+1):
    s+=str(j)+' '
    
  print(s)
# // Write a program that takes number of rows as input and print below respective pattern.

# // Testcase1	:  Enter number of rows: 4
# // Output     	: 

# // 4 3 2 1
# // 4 3 2
# // 4 3
# // 4

rows = 4
for i in range(rows, 0, -1):  # Start from 4, decrease to 1
    s = ''
    for j in range(rows, rows - i, -1):  # Start from 4, decrement
        s += str(j) + ' '
    print(s)

# // Write a program that takes number of rows as input and print below respective pattern.

# // Testcase1	:  Enter number of rows: 4
# // Output     	: 

# // 1 1
# // 1 2 3
# // 1 2 3 6
# // 1 2 3 4 10

rows=4
for i in range(1,rows+1):
  s=''
  sum=0
  for j in range(1,i+1):
    sum=sum+j
    s+=str(j)+' '
  print(s+str(sum))  
