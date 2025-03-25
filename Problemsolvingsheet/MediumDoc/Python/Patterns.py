

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
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 4 3 2 1
// 4 3 2
// 4 3
// 4
let rows=4;
for(i=1;i<=rows;i++)
{
  s=''
  for(j=rows;j>=i;j--)
  {
    s+=j+' '  
    
  }
  console.log(s)
}
