

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

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 1 1
// 1 2 3
// 1 2 3 6
// 1 2 3 4 10


let rows=4;
for(i=1;i<=rows;i++)
{
  s=''
  sum=0
  for(j=1;j<=i;j++)
  {
    sum+=j
    s+=j+' '
  }
  console.log(s+sum)
}
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 3
// Output     	: 

//   1
// 1   2
// 1  2  3

let rows=3
for(i=1;i<=rows;i++)
{
  s=''
  for(sp=0;sp<rows-i;sp++)
  {
    s+=' '
  }
  for(j=1;j<=i;j++)
  {
    s+=j+' '
  }
  console.log(s)
}
