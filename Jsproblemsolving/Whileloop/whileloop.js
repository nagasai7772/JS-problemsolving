// 1.Find 6th prime number after the number if it  is even
let num = 66;
let count = 0;
if (num >= 2) {
  if (num % 2 == 0) {
    while (count < 7) {
      num++;
      fact = 0;
      
      for (i = 2; i < num; i++) {
        if (num % i == 0) {
          fact++;
          break;
        }
      }
      if (fact == 0) {
        if(count==6)
        console.log(num,`This is ${count}th prime number after  given even number`);
        count++;
      }
    }
  } else {
    console.log(`Number should be even`);
  }
} else {
  console.log(`Number greater than 2`);
}



// 2.Find 6th prime number before the number if it is odd

let value=89;
let Count=0
if(value>=1)
{
  if(value%2==1)
  {
    while(Count<10)
    {
      value--;
      factnum=0;
      for(i=2;i<value;i++)
      {
        if(value%i==0)
        {
          factnum++;
          break;
        }
      }
      if(factnum===0)
      {
        if(Count===6)
        console.log(value,`This is ${Count}th prime number before given number`)
        Count++
      }
    }
  }
  else
  {
    console.log(`Number should be only odd`)
  }
}
else
{
  console.log(`Number should be Equal to 1 or Greater than 1 `)
}







































































