

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 1
// 1 2
// 1 2 3
// 1 2 3 4

let rows=4
for(i=1;i<=rows;i++)
{
  s=''
  for(j=1;j<=i;j++)
  {
    s+=j+" "
  }
  console.log(s)
}
