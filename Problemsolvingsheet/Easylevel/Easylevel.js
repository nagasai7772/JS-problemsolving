// // 1.Create a function that takes two numbers as arguments and returns their sum.

// /**Method 1 */
// function add(a,b)
// {
//     console.log(`sum of values are `,a+b);
// }
// add(9,2)

// /**Method 2 */

// function sum(x,y)
// {
//     return  x+y;
// }
// console.log(`Sum of values are`,sum(2,4))

// /**Method 3 */

// function plus()
// {
//     var num1=5;
//     var num2=6;

//     console.log(`sum of values are `,num1+num2)
// }
// plus();

// /**Method 4 */

// function addd()
// {
//     var num3=9;
//     var num4=6;
//      return num3+num4

// }
// console.log(`sum of values are`,addd());

// /**Method 5 */

// var add1=6;
// var add2=8;
// var value=add1+add2

// function addition()
// {
//     console.log(`sum of values are`,value)
// }
// addition();

//**Method 6 */
// var sum=function pluss(value1,value2)
// {
// return value1+value2;
// }
// console.log(`sum of values are`,sum(12,15));
// //**Method 7 */
// function sums(x1=6,y1=9)
// {
//     return x1+y1
// }
// console.log(`sum of values are`,sums());
// ---------------------------------------------------------------------------------------------------------
// 2.Write a function that takes an integer minutes and converts it to seconds.

// /**Method 1 */
// function min()
// {
//     var minutes=60;
//     console.log(`${minutes} minutes has`,minutes*60 ,"seconds");
// }
// min();

// /**Method 2 */

// function convert(minn)
// {
//   return minn*60
// }
// var mins=25
// console.log(` ${mins} minutes has ${convert(mins)}` ,"seconds");
// //**Method 3 */

// var minute=2;
// function sec()
// {
//     console.log(`${minute} minutes has`,minute*60,"seconds");

// }
// sec();

// //**Method 4 */
// function seco(sec1)
// {
// console.log(`${sec1} minutes has `,sec1*60,"seconds");

// }
// seco(120)

// //**Method 5 */

// var x=function time(times)
// {
//   console.log(`${times} minutes has `,times*60,`seconds`);

// }
// x(9)

// ---------------------------------------------------------------------------------------------------------

// 3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

//**Method 1 */
// function inte(arg)
// {
//   return arg+1

// }
// var a =10
// console.log(`Argument value is ${a} increment value is ${inte(a)}`);

// //**Method 2 */

// var inc=65;

// function pass()
// {
//   console.log(`Given value is ${inc}, increment value is ${inc+1}`)
// }
// pass(inc)

// //**Method 3 */

// var val=7;
// function call()
// {
// if(val>0)
// {
//   console.log(`Actual value is ${val} Increment value is ${val+1}`);

// }
// }
// call()

// //**Method 3 */

// var inc1=9;
// switch (true)
// {
//   case (inc1>0):
//     console.log(`Taken value is ${inc1} Increment value is ${inc1+1}`);

// }
//**Method 4 */
// function incc()
// {
//     var A=22;
//     ++A;
//     console.log(`The increment value is`,A)
// }
// incc()
//**Methosd 5 */
// function hello()
// {
//     var B=6;
//     C=B;
//     C++
//     console.log(B,`The increment value is `,C)

// }
// hello()

// ---------------------------------------------------------------------------------------------------------

// 4.Create a function that takes the age in years and returns the age in days.

//**MEthod 1 */
// var age=25
// var leapyr=age/4
// var total_age=age*365+leapyr
// function year()
// {
// console.log(`The age in years is`, age,` and your age by days is`,total_age);

// }
// year()
// //**Method 2 */
// function cal(yr)
// {
//     var leap=yr/4
//     var total=yr*365+leap
//   console.log(yr,` years converted into`, total,` days `);

// }
// cal(52)
// //**Method 3 */
// var con=function ages(m)
// {
//     var leap1=m/4
//     var total1=m*365+leap1;
//     console.log(m,`age is converted into days`,total1);

// }
// con(36)
// //**Method 4 */
// function conv()
// {
//     var s=99;
//     var leaps=s/4;
//     return s*365+leaps
// }
// console.log(`The converted days is`,conv());

// ---------------------------------------------------------------------------------------------------------

// 5.Create a function that takes voltage and current and returns the calculated power.
//**Method 1 */
// var I=3;
// var R=2.5;
// console.log(`The voltage if current is `,I*R);

// //**Method 2 */
// function vol(i,r)
// {
//     console.log(`The current voltage is `,i*r);

// }
// vol(9,18.5)
// //**Method 3 */

// function ohm(I1,R1)
// {
//     return I1*R1

// }
// console.log(`The voltage is `,ohm(6.3,8.3));

// //**Method 4 */
// var i1=function ohms(n1,n2)
// {
//     console.log(`The converted voltage is `,n1*n2);

// }
// i1(6.1,3.1);

// //**Method 5 */

// var vol1=6.3;
// var vol2=5.6;
// function ohmm(X,Y)
// {
//     V=X*Y;
//     console.log(`The present voltage is`,V);

// }
// ohmm(vol1,vol2)

// ---------------------------------------------------------------------------------------------------------

// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.

//**Method 1 */

// function space(ar)
// {
//     console.log(`something` , ar)

// }
// space("Tonystark")

// //**Method 2 */

// function str(S)
// {
//     return `something`+" "+S
// }
// console.log(str("CaptainAmerica"));
// //**Method 3 */
// var D=function pick(F)
// {
//     return `something` +" "+F
// }
// console.log(D(`Avengers`))

//**Method 4 */

// function some(G)
// {
//     console.log(G);

//     function thing(G)
//     {
//         console.log(`something`, G);

//     }
//     thing("Thor")

// }

// some("Thor")

// ---------------------------------------------------------------------------------------------------------

// 7.Create a function that takes two arguments. Both arguments are integers, a and b.
//  Return true if one of them is 10 or if their sum is 10.
//**Method 1 */
// function two(a,b)
// {

//     return (a===10 ||b===10) || a+b===10

// }
// console.log(`The given values are `,two(0,10))

/**Method 2 */
// var n1,n2;
// function Num()
// {

//     return n1,n2
// }
// console.log(Num(10,20));

// ---------------------------------------------------------------------------------------------------------

// 8.Create a function that takes two strings as arguments and returns either true or false
//  depending on whether the total number of characters in the first string is equal to the total number
//   of characters in the second string.
// **Method 1 */
// function first(arg1,arg2)
// {
//     return arg1.length===arg2.length
// }
// console.log( `The total characters of two strings are  `,first("das","hard"));

// //**Method 2 */

// var str1="Hari";
// var str2="Naga";
// function and()
// {
//     return str1.length===str2.length
// }
// console.log(`The two strings are`,and(str1,str2));

// 9.Create a function that takes a name and returns a greeting in the form of a string.
//  Don't use a normal function, use an arrow function.

//**method1 */
//  function mrng(man)
//  {

//     var gre = () =>
//         {
//             console.log(`Good morning`);

//         }
//         gre();
//         console.log(man );

// }
// mrng("Iron man")

// //**Mehod 2 */

// function afte(ott)
// {
//     var noon=(hero)=>
//     {
//         return hero
//     }
//     console.log(noon(`Thalapathy`));
//     return ott
// }
// console.log(afte(`GoodAfternoon`));

// //**Mehod 3 */

// var eve=(sup)=>
// {
//     return sup
// }

// function MR(movie) {
//     return movie

// }
// console.log(MR(`Hello`),eve(`Javascript`));

//*-------------------------------------------------------------------------------------------
// 10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string
// // of those numbers formatted as a phone number (e.g. (555) 555-5555).
//**Method 1 */
// function phoneNumber(num) {
//     if (num.length > 10 || num.length < 10)
//          {
//       return "give me only 10 members";
//     }
//     return (`(${num[0]}${num[1]}${num[2]})${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`)
//     ;

//         }
// console.log(`The phone number is -`,phoneNumber([5, 5, 5, 5, 5, 5, 5, 5, 5,5]));

// //**Method 2 */
// var Num=(mob)=>
// {
// if(mob.length>10||mob.length<10)
// {
//     return `Mobile number has 10 numbers`
// }

// {
//     return(`(${mob[0]}${mob[1]}${mob[2]})-${mob[3]}${mob[4]}${mob[5]}-${mob[6]}${mob[7]}${mob[8]}${mob[9]}`)
// }

// }
// console.log(`The Mobile num is -`,Num([1,2,3,4,5,6,7,8,9,0]));

// *-------------------------------------------------------------------------------------------

// 11.Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// *-------------------------------------------------------------------------------------------

// **Method 1 */
// var alpha=["a", "ccc", "dddd", "bb"];
// console.log(`The rearranged array is`,alpha.sort());

// // //*-------------------------------------------------------------------------------------------
// // //**Method 2 */
// function alpha1()
// {
//     var arr=["a", "ccc", "dddd", "bb"];
//     return arr.sort()
// }
// console.log(`The sorted array is `,alpha1());

// // **Method 3 */
// var ascending=(arrange)=>
//     {
//         return  arrange
//     }

//     console.log(`The rearranged array is `,ascending(["a", "ccc", "dddd", "bb"]));

// 12.Create a function that takes an array of arrays with numbers.
//  Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// let arr=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

// max=[]
// for(i of arr)
// {
//     max.push(Math.max(...i))
// }
// console.log(max);





// 13.Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// let arr=[10, 40, 30, 20, 50]
// max=0
// sec_max=0
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         sec_max=max
//         max=arr[i]
//     }
    
// }
// console.log(sec_max,`is the second highest number in array`);

// //**Method 2 */
// function secmax(arr)
// {
//     max=0;
//     second_max=0
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]>max)
//         {
//             second_max=max
//             max=arr[i]
//         }

//     }
//     console.log(second_max,'is the second largest num');
    
// }

// secmax([10, 40, 30, 20, 50])
// 14.Create a function that takes an array of items, removes all duplicate items and returns a new array
// in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
//Method 1**/
// let arr=[1,0,1,0]
// let removeDups=[];
// arr.forEach((check)=>
// {
//     if(!removeDups.includes(check))
//     {
//         removeDups.push(check)
//     }
// })
// console.log(removeDups);
// /**Method 2 */

// function Removedups(Arr)
// {
//     let RemoveDups=[];
//     Arr.forEach(Remove=> {
//         if(!RemoveDups.includes(Remove))
//         {
//             RemoveDups.push(Remove)
//         }
        
//     });
//     console.log(RemoveDups);
    

// }
// Removedups([1,0,1,0])


// 15.Create a function that takes an array of integers as an argument and returns a unique number from that array
// . All numbers except unique ones have the same number of occurrences in the array.

// let arr=[2,2,2,3,4,4,4]
// for(i=0;i<arr.length;i++)
// {count=0
//     for(j=0;j<arr.length;j++)
//     {
//         if(arr[i]===arr[j])
//         {
//             count++
//         }
//     }
//     if(count==1)
//         {
//             console.log(`The unique number in array`,arr[i]);
            
//         }
        
// }

/**Method 2 */

// function unq(arr)
// {
//     for(i=0;i<arr.length;i++)
//     {
//         count=0
//         for(j=0;j<arr.length;j++)
//         {
//             if(arr[i]===arr[j])
//             {
//                 count++
//             }
//         }
    
//     if(count===1)
//     {
//         console.log(`The unique number in an array is ${arr[i]}`);
        
//      } }
// }

// unq([2,2,2,3,4,4,4])










// 16.Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1

// let str="Chamber of secrets"
// let charcount=0;
// let charcheck="e";
// for(i=0;i<str.length;i++)
// {
//     if(str[i]===charcheck)
//     {
//         charcount++
//     }
// }
// console.log(charcount);


//**Method 2 */


// let str1="Chamber of secrets";
// let str2="c";
// let charcount=0
// for(i=0;i<str1.length;i++)
// {
//     for(j=0;j<str2.length;j++)
//     {
//         if(str1[i]==str2[j])
//         {
//             charcount++
            

//         }
//     }
    
// }
// console.log(charcount);

/**Method 3 */

// function Checkcount(str1,str2)
// {
//     let charcount=0;
//     for(i=0;i<str1.length;i++)
//     {
//         for(j=0;j<str2.length;j++)
//         {
//             if(str1[i]==str2[j])
//             {
//                 charcount++
//             }
//         }
//     }
//     console.log(charcount);
    
// }
// Checkcount("Hello","l")















// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5

//**Method 1 */

// function vowelcount(str)
// {
//     let vowels="aeiouAEIOU";
//     let vowel_count=0
//     for(i=0;i<str.length;i++)
//     {
//         if(vowels.includes(str[i])&&str[i]!==" ")
//         {
//             vowel_count++
//         }
//     }

//     console.log(`The vowel count is `,vowel_count);
    

// }
// vowelcount("celebration")
// //**Mehod 2 */
// const vowel_count=(word)=>
// {
//     let vowel_counts=0;
//     let vowels="aeiouAEIOU"
//     for(i=0;i<word.length;i++)
//     {
//         if(vowels.includes(word[i])&&word[i]!==" ")
//         {
//         vowel_counts++
//         }

//     }
//     console.log(`The vowel count is`,vowel_counts);
    

// }
// vowel_count("celebration")



// 18.Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
//**method 1 */
// var str="Happy Birthday"
// var str2=""

// for(i=0;i<str.length;i++)
// {
//   if(str[i]===str[i].toUpperCase())
//   str2+=str[i].toLowerCase()
// {
  
// } if(str[i]===str[i].toLowerCase())
// {
//   str2+=str[i].toUpperCase()
  
// }
  
// }
// console.log(str2)
//**Method 2 */

// function reverse(word)

// {
//     wish="";
//     for(i=0;i<word.length;i++)
//     {
//         if(word[i]===word[i].toUpperCase())
//         {
//              wish+=word[i].toLowerCase()
//         }
//         if(word[i]===word[i].toLowerCase())
//         {
//             wish+=word[i].toUpperCase()

//         }
//     }
//     console.log(wish);
    

// }
// reverse("Happy Birthday")
// 19.Take one integer n, loop till n and pass each value to a function,
// create a function that takes one integer parameter, and multiply with 2 in every integer.

// Input:      n=5
// Output:   2 4 6 8 10

// Explanation:  Loop start with 1 go till 5 bcoz n=5
//         1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc
//**Method 1 */
// var n=5;
// for(i=1;i<=n;i++)
// {
//     console.log(i*2);

// }

// //**Method 2 */

// function multiply(table)
// {
//     var two=2
//     for(i=1;i<=table;i++)
//     {
//         console.log(`${i}X${two}=${i*2}`)
//     }
// }
// multiply(5)

// //**Method 3 */

// var Multiply=(mul)=>
// {
//     var to=2;
//     for(i=1;i<=mul;i++)
//     {
//       console.log(`${i}X${to}=${i*2}`);

//     }
// }
// Multiply(5)





// 20. Create Function that will take one parameter and return type of the data.
//**Method 1**

// function data(Type)
// {
//     console.log(`The given argument is-`,Type);

//     return typeof(Type)
// }
// console.log(`The typeof givenData is -`,data(6));

// //**Method 2 */

// var example=(Ans)=>
// {

//     console.log(`The cgiven argument is-`,Ans)
//     return typeof(Ans)
// }
// console.log(`The typeof given argument is`,example("Hello"));

// 21. Program to find greatest of three numbers(using ternary operator).
//**Method 1 */
// var a=4,b=8,c=2;
// (a>b&&a>c)?console.log(a,`a is big`)
// :(b>c&&b>a)?console.log(b,`b is big`)
// :(c>a&&c>b)?
// console.log(c,`c is big `)
// :console.log(`Invalid input`);

// /**Method 2 **/

// function greatest(A,B,C)
// {
//     (A>B&&A>C)?console.log(A,`A IS BIG`)
//     :(B>C&&B>A)?console.log(B,`B IS BIG`)
//     :(C>A&&C>B)?
//     console.log(C,`C IS BIG`):
//     console.log(`INVALID VALUES`);

// }
// greatest(1,3,2)

// 22 . C Program to find factorial of number.

// Input: n=5
// Output: 120

// Explanation: 5 x 4 x 3 x 2 x 1 = 120

//  //*Method 1
// let num=3;
// let fact=1
// for(i=1;i<=num;i++)
//     {
//         fact*=i
//     }
//     console.log(`The factorial of ${num}`,fact);

// //**Method 2 */
// function factorial(num1)
// {
//     facto=1
//     for(i=num1;i>=1;i--)
//     {
//          facto*=i
//     }
//     console.log(`The factorial of ${num1} is`,facto);

// }
// // factorial(6)
// 23. C Program to arrange numbers in ascending order
// Input: [2,3,1,5,4]
// Output: [1,2,3,4,5]

//     Sort the Array using loop only(you can not use predefined function).

// let arr=[1,2,3,4,5];
// for(i=0;i<arr.length;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//         let swap=arr[i];
//         arr[i]=arr[j];
//         arr[j]=swap
//     }
//     console.log(arr[i]);
    
// }

// let arr=[2,3,1,5,4];
// for(i=0;i<arr.length;i++)
// {
//   for(j=i+1;j<arr.length;j++)
//   {
//     if(arr[i]>arr[j])
//     {
//       let swap=arr[i];
//       arr[i]=arr[j]
//       arr[j]=swap
//     }
//   }
//       console.log(arr[i])
// }











// 24. Print Patter using loop.

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

//**Method 1 */

// let star=5;

// for(i=1;i<=star;i++)
// {
//   let star2=''
//   for(j=1;j<=i;j++)
//     {

// star2+=j+''

// }
// console.log(star2);

// }
// 25. C Program to Calculate the Power of a Number(using loop only).

// Input: n=5, p=3
// Output: 5 ^ 3 = 125
// Explanation: 5 x 5 x 5 = 125

//**Method 1 */
// let n=5;
// let p=3;
// for(i=1;i<=n;i++)
// {
//     for(j=1;j<=p;j++)
//     {
//          pow=i**j
//     }
// }
// console.log(`The power of given number is `,pow);
// //**Method 2 */

// function Calculatepower(num,power)
// {
//     for(i=1;i<=num;i++)
//     {
//         for(j=1;j<=power;j++)
//         {
//              expo=i**j
//         }

//     }
//     console.log(`The power of given number is `,expo);
    

// }
// Calculatepower(6,5)




// 26. Program to Check Whether a Number is Prime or Not

//**Method 1 */

// let prime=16;
// let table=0;
// if(prime>=2)
// {
// for(i=2;i<prime;i++)
// {
//     if(prime%i==0)
//     {
//         table++
//         break
//     }

// }
// if(table==0)
// {
//     console.log(`The given number ${prime} is prime`);

// }
// else
// {
//     console.log(`The given number ${prime} is not prime`);

// }
// }
// else
// {
//     console.log(`Number should be greater than 2 or equal to 2`)
// }

//**Method 2 */

// let isprime=5;

// while(isprime>0)
// {
//     let Table=0;
//     if(isprime>2)
//     {
//         for(i=2;i<isprime;i++)
//         {
//             if(isprime%i==0)
//             {
//                 Table++
//                 break
//             }
//         }
//         if(Table===0)
//         {
//             console.log(isprime,`Prime number`);
//             break

//         }
//         else
//         {
//             console.log(isprime,`Not prime`);
//             break

//         }
//     }
//     else
//     {
//         console.log(`Number should be greater then 2 or equal to 2`);
//         break

//     }

// }
// //**Method 3 */
// function checkprime(Value)
// {
//     factor=0
//     if(Value>2)
//     {
//         for(i=2;i<Value;i++)
//         {
//             if(Value%i==0)
//             {
//                 factor++
//                 break

//             }
//         }
//         if(factor===0)
//         {console.log(Value,`Is prime`);
//         }

//     else
//     {
//         console.log(Value,`Is not prime`);

//     }
//    }
//    else
//     {
//         console.log(`Prime always stars from 2`);

//     }

// }
// checkprime(35)
// 27. Program to find LCM of two numbers using while loop

// Input: 15 50
// Output: Lcm of 15 and 50 is 150.

// let num1=15,num2=50;
// let max=num1>num2?num1:num2;
// let min=num1<num2?num1:num2;
// if(max%min==0)
// {
//     console.log(max,`is the LCM`);

// }
// else
// {

// check=0
//     while(true)
//     {

//         check=check+max;
//         if(check%num1===0&&check%num2===0)
//         {
//             console.log(check,`is the LCM`);
//             break;
//         }
//     }
// }

//**Method 2 */
// function LCM(value1, value2) {
//   let maxnum = value1 > value2 ? value1 : value2;
//   let minnum = value1 < value2 ? value1 : value2;
//   if (maxnum % minnum === 0) {
//     console.log(maxnum, `is the LCM`);
//   } else {
//     find = 0;
//     while (true)
        
//     {
//       find =find+ maxnum;
//       if (find % value1 === 0 && find % value2 === 0) {
//         console.log(find, `is the LCM`)
//         break
    
//       }
//     }
//   }
// }
// LCM(6,9)

// 28. Program to Display Characters from A to Z Using Loop with count.

// //**Method 1 */
// var Count=0;

// for(i=65;i<=90;i++)
// {
//     Count++;
//     console.log(String.fromCharCode(i),Count);

// }

// //**Method 2 */
// function Char()
// {
//     var add=0    
//     for(j=65;j<=90;j++)
//     {
//           add++
//         console.log(String.fromCharCode(j),add);

//     }
// }
// Char();
//**Method 3 */
// let i=65;
// var count=0
// while(i<=90)
// {
//     count++;
//     console.log(String.fromCharCode(i),count)
//     i++;

// }

// 30. Program to count vowels and consonants in a given String.

// 			Input: i am ram

//**Method 1 */
// let str="i am ram "
// let vowels="aeiouAEIOU";
// let vowel_count=0;
// let consonant_count=0;
// for(i=0;i<str.length;i++)
// {
//     if(vowels.includes(str[i])&&str[i]!==" ")
//     {
//         vowel_count++
//     }
//     if(!vowels.includes(str[i])&&str[i]!==" ")
//     {
//         consonant_count++
//     }
// }
// console.log(`The vowel count in given string is`,vowel_count);
// console.log(`The consonant count in given string is `,consonant_count);

// //**Method 2 */
// function check(word)
// {
//     let vowel_count=0;
//     let consonant_count=0
//     let vowels="aeiouAEIOU";
//     for(i=0;i<word.length;i++)
//     {
//         if(vowels.includes(word[i])&&word[i]!==" ")
//         {
//             vowel_count++
//         }
//         if(!vowels.includes(word[i])&&word[i]!==" ")
//         {
//             consonant_count++
//         }
//     }
//     console.log(`The vowel count is `,vowel_count);
//     console.log(`The consonant count is `,consonant_count);
    
    

// }
// check("i am ram ")











// 31. program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]
//**Method 1 */
// var arr=[1,2,3,4,5,7,8,9,10];
//  let ele=6;
//  let pos=6;
//  arr.splice(pos-1,0,ele)
//  console.log(arr)

//**Method 2 */

//  32. Reverse a number using while Loop

// 			Input: 123
// 			Output: 321

// let NUM=123;
// let rev=0;
// while(NUM>0)
// {
//     digit=NUM%10
//     rev=rev*10+digit
//     NUM=Math.floor(NUM/10)
// }
// console.log(rev);

// function Reverse(Number)
// {

//     let ReverseNumber=0
//     while(Number>0)
//     {
//         store=Number%10;
//         ReverseNumber=ReverseNumber*10+store
//         Number=Math.floor(Number/10)
//     }
//     console.log(`The reverse number is`,ReverseNumber);

// }
// Reverse(6502)


// 33. Count occurrence of number:

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 7 present 2 times.

//**Method 1 */
// let arr=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
// let find=7;
// let count=0;
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]===find)
//     {
//         count++
//     }
// }
// console.log(find,`is present`,count,`times`);

// /**Mthod 2 */

// function occurrence(array)
// {
//     let find=7;
//     let count=0;
//     for(i=0;i<array.length;i++)
//     {
//         if(array[i]===find)
//         {
//             count++
//         }
//     }
// console.log(find,`is present`,count,`times`);

// }
// occurrence([1,3,4,4,2,2,2,2,7,8,8,8,7,7,7])
