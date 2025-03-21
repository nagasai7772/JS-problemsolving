// 1.Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples :

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",12]]

// toArray({}) ➞ []

// let obj={ a: 1, b: 2 }
// console.log(Object.entries(obj));

// let obj2={ shrimp: 15, tots: 12 }
// console.log(Object.entries(obj2));

//**Method 2 */

// function convert(obj)
// {
//     console.log(Object.entries(obj));

// }
// convert({ shrimp: 15, tots: 12 })
// convert({ a: 1, b: 2 })

// 2.Create a function that takes two numbers as arguments (num, length)
//  and returns an array of multiples of num until the array length reaches length.
// Examples :

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// function multiples(num,len)
// {
//     emp=[]
//     for(i=1;i<=len;i++)
//     {
//         mul=num*i
//         emp.push(mul)

//     }
//  console.log(emp);

// }
// multiples(7,8)

// 3.Create the function that takes an array with
//  objects and returns the sum of people's budgets.

// Examples :

//   getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

// let getBudgets=([
//      { name: "John", age: 21, budget: 23000 },
//       { name: "Steve",  age: 32, budget: 40000 },
//       { name: "Martin",  age: 16, budget: 2700 }
//      ])

// 5.Create a function that moves all capital letters to the front of a word.
// 	Examples :

// capToFront("hApPy") ➞ "HAPpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// let str="hApPy";
// let Lower_case=''
// let Upper_case=''

// for(i of str)
// {
//     if(i===i.toUpperCase())
//     {
//         Upper_case+=i
//     }
//     else if(i===i.toLowerCase())
//     {
//         Lower_case+=i
//     }
// }
// console.log(Upper_case+Lower_case);

//**Method 2 */

// function Cap(str)
// {
//     let Upper_case=''
//     let Lower_case=''
//     for(i of str)
//     {
//         if(i===i.toUpperCase())
//         {
//             Upper_case+=i
//         }
//         else if(i===i.toLowerCase())
//         {
//             Lower_case+=i
//         }
//     }
//     console.log(Upper_case+Lower_case);

// }
// Cap("shOrtCAKE")
// Cap("moveMENT")
// Cap("hApPy")

// 6.Count each occurrence of number(can not use predefined function).

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 1 present 2 times.
// 				   2 present 1 times.
// 				   3 present 2 times.
// 				   5 present 1 times …….  Etc
// let arr=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10]
// let emp=[]
// for(i of arr)
// {
// 	if(!emp.includes(i))
// 	{
// 		emp.push(i)

// 	}
// }
// // console.log(emp);
// for(i of emp)
// {
// 	count=0
// 	for(j of arr)
// 	{
// 		if(i===j)
// 		{
// 			count++
// 		}

// 	}
// 	console.log(`${i} is present at ${count} times`);
// }

// 7.Write a function that accepts an array of strings.
// Return the longest string(can not use predefined function).

// Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’]
//     // Output: Elephant
// let arr=["nik", "mikhil", "Cow","Elephant"]
// let max=""
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i].length>max.length)
//     {
//         max=arr[i]
//     }
// }

// console.log(`The longest string in array is `,max);

// 8.Most Commonly Used two Character in String(can not use predefined function)

// 				Input: ‘Hii i am ram’
// Output; i, a

// let str="Hii i am ram "
// let emp=""
// for(i of str)
// {
//     if(!emp.includes(i)&&i!==" ")
//     {
//         emp+=i
//     }
// }
// // console.log(emp);
// let word_count=0;
// let rep_char=""

// for(i of emp)
// {
//     count=0
//     for(j of str)
//     {
//         if(i===j)
//         {
//             count++
//             // console.log(i,j);

//             // console.log(count);
//         }
//         if(count>word_count)
//         {
//             rep_char=i+" ";
//             word_count=count
//         }

//     }

// }
// console.log(rep_char);

// 9.Write Program to remove duplicate elements in an array
// and sort it in descending order(can not use predefined function).

// 			Input: [5,3,5,2,1,1,7,3,5,6]
// 			Output: [7,6,5,32,1]

// let arr=[5,3,5,2,1,1,7,3,5,6]
// let emp=[]
// for(i in arr)
// {
//         //   For removing duplicates in an array
//     if(!emp.includes(arr[i]))
//     {
//         emp.push(arr[i])
//     }

// }
// // console.log(emp);
// for(i=0;i<emp.length;i++)
// {
//     for(j=0;j<emp.length;j++)
//     {     //sorting array in descending order
//         if(emp[i]>emp[j])
//         {
//             temp=emp[i]
//             emp[i]=emp[j]
//             emp[j]=temp
//         }
//     }
// }
// console.log(`finally the sorted array `,emp);

// 10.Write a Program to Remove brackets from an algebraic expression(can not use predefined function).

// Input: a + b-(9+c)=3
// Output: a + b- 9+c=3

// function removeBrackets(expression) {
//   let result = ""; // Final result string
//   let stack = []; // To manage brackets

//   for (let i = 0; i < expression.length; i++) {
//     let char = expression[i];

//     if (char === "(") {
//       // Push the bracket to the stack
//       stack.push(char);
//     } else if (char === ")") {
//       // Pop the last opening bracket
//       if (stack.length > 0 && stack[stack.length - 1] === "(") {
//         stack.pop();
//       }
//     } else {
//       // Add the character to the result if it's not a bracket
//       result += char;
//     }
//   }

//   return result;
// }

// // Test the function
// let input = "a + b-(9+c)=3";
// let output = removeBrackets(input);
// console.log("Input: " + input);
// console.log("Output: " + output);

// 11.Write Program to remove duplicate elements in an array
// and sort it in Accending order(can not use predefined function).

// 			Input: [Z, A, P, C, A, Z , K, N, C]
// 			Output: [A, C, K,N, P, Z]
// let arr=["Z", "A", "P", "C", "A", "Z" , "K", "N", "C"]
// let emp=[]
// for(i of arr)
// {    //**Removing Duplicates */
//     if(!emp.includes(i))
//     {
//         emp.push(i)
//     }
// }
// console.log(`After Removing duplicates`,emp);

// for(i=0;i<emp.length;i++)
// {
//     for(j=0;j<emp.length;j++)
//     {      //Sorting Array*//
//         if(emp[i]<emp[j])
//         {
//             temp=emp[i]
//             emp[i]=emp[j]
//             emp[j]=temp
//         }
//     }
// }
// console.log('Sorted array ',emp);

// 12.If subseq's  array  sequence is present in the array, returns true or else returns false.
// Let arr = [5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
// Example:
//            Input : Subseq1 = [7, -1, 5, -3] Output:  true
//                       Subseq2 = [7, -1, 4, -3]            : false
//            Subseq3 = [ -1]                        : true
//                       Subseq4 = [13, -3, 4, 1]           : false
// let arr1=[5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
// let arr2=[5,7,3,2]
// // let emp=[]
// count=0
// for(i of arr1)
// {
//     for(j of arr2)
//     {
//         if(i==j)
//         {
//             count++

//         }
//     }
// }

// 13.Find sum of the Unique numbers:
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
//  The unique numbers are 1,2, 3, 5 so the sum should be 11.

// let arr=[1, 2, 2, 1, 3, 5, 1];
// let emp=[]
// for (i of arr)
// {         /**removing Duplicates */
//     if(!emp.includes(i))
//     {
//          emp.push(i)
//     }

// }
// console.log(`The unique numbers in an array is `,emp);

// sum=0
// for(i of emp)
// { //**Addin unique values  */
//     sum=sum+i
// }
// console.log(`The sum of unique numbers is `,sum);

// Write Program to remove duplicate elements in an array
// and sort it in Accending order(can not use predefined function).

// 			Input: [Z, A, P, C, A, Z , K, N, C]
// 			Output: [A, C, K,N, P, Z]
