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



// 24. Print Patter using loop.

// 1
// 1 2
// 1 2 3
// 1 2 3 4
//   1 2 3 4 5

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

// 26. Program to Chec`k Whether a Number is Prime or Not

//**Method 1 */
// function checkPrimeOrNotPrime(num2) {
//     if (num2 > 1) {
//       enter = 0;
//       for (i = 2; i < num2; i++) {
//         if (num2 % i == 0) {
//           enter++;
//           console.log(`${num2} is not a prime number`);
//           break;
//         }
//       }
//       if (enter == 0) {
//         console.log(`${num2} is prime number`);
//       }
//     } else {
//       console.log("something");
//     }
//   }
//   checkPrimeOrNotPrime(9);
//   checkPrimeOrNotPrime(7);
//**Method 2 */





// 31. program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]

var arr=[1,2,3,4,5,7,8,9,10];
 let ele=6;
 let pos=6;
 arr.splice(pos-1,0,ele)
 console.log(arr)
 