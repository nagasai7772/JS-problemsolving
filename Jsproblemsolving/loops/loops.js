// Problem solving task

// Question1. 1 to 100 multiples of 9 if it is even
// 18 36 54 …..
for(var i=1;i<=100;i++)
{
    if(i%9==0&&i%2==0)
    {
        console.log(`The even multiples in 9 is `,i);
        
        
    }
}

// Question 2. Print tables odd numbers in between 1 to 10
// 1 3 5 7 9
for(i=1;i<=10;i++)  
{
    if(i%2==1)
    {
        for(j=1;j<=20;j++)
        {
            console.log(`${i} X ${j} = ${i*j} `);
            
        }
    }
}



//print the table upto 20 multiples