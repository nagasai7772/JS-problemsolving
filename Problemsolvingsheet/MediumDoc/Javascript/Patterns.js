

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
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// 1+
// 12++
// 123+++
// 1234++++

let row=4
for(i=1;i<=row;i++)
{
  s=''
  for(j=1;j<=i;j++)
  {
    s+=j
  }
  for(k=1;k<=i;k++)
  {
    s+='+'
  }
  console.log(s)
}


// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 
+1
++12
+++123
++++1234

let row=4
for(i=1;i<=row;i++)
{
  s=''
  for(j=1;j<=i;j++)
  {
    s+='+'
  }
  for(k=1;k<=i;k++)
  {
    s+=k
  }
  console.log(s)
}

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// +1
// ++2
// +++3
// ++++4
let row=4
for(i=1;i<=row;i++)
{
  s=''
  sum=0
  for(j=1;j<=i;j++)
  {
    s+='+'
  }
  for(k=1;k<=i;k++)
  {
    sum++
  }
  s+=sum
  console.log(s)
}

// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// A 
// AB
// ABC
// ABCD

let row=4
for(i=1;i<=row;i++)
{
  let alpha=65
  s=''
  for(j=1;j<=i;j++)
  {
    code=String.fromCharCode(alpha)
    s+=code
    alpha++
  }
  console.log(s)
}
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 3
// Output     	: 

//   A
// A  B
// A  B  C

let row=3
for(i=0;i<row;i++)
{
  s=''
  alpha=65
  for(sp=0;sp<row-i;sp++)
  {
    s+=' '
  }
  for(j=0;j<=i;j++)
  {
    code=String.fromCharCode(alpha)
    s+=code+' '
    alpha++
  }
  console.log(s)
}
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// A1
// AB12
// ABC123
// ABCD1234

let row=4
for(i=1;i<=row;i++)
{
  alpha=65
  s=''
  for(j=1;j<=i;j++)
  {
    code=String.fromCharCode(alpha)
    s+=code+''
    // s+=j
    alpha++
    
  }
  for(k=1;k<=i;k++)
  {
    s+=k
  }
  console.log(s)
}
// Write a program that takes number of rows as input and print below respective pattern.

// Testcase1	:  Enter number of rows: 4
// Output     	: 

// A
// ab
// ABC
// abcd


let row=4
for(i=1;i<=row;i++)
{
  alpha1=97
  alpha2=65
  s=''
  for(j=1;j<=i;j++)
  {
    if(i%2==0)
    {
      code=String.fromCharCode(alpha1)
      s+=code
      alpha1++
    }
    else
    {
      code=String.fromCharCode(alpha2)
      s+=code
      alpha2++
    }
  }
  console.log(s)
}


