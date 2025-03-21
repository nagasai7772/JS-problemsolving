// // 1. Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// // Examples :

// // toCamelCase("A-B-C") ➞ "ABC"

// // toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

// // toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"

// function Convert(str) 
// {
//   let str1 = "";
//   for (i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z") {
//       str1 += str[i];
//     }
//   }
//   console.log(str1);
// }
// Convert("A-B-C")
// Convert("The_Stealth_Warrior")
// Convert("the-stealth-warrior")

//2  Create a function that takes an array of strings and returns an array
//  with only the strings that have numbers in them.
// If there are no strings containing numbers, return an empty array.

// Examples :

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]
//**method 1 */
// let arr=["1a", "a", "2b", "b"]
// for(i of arr)
// {
//     alpha_count=0;
//     num_count=0;
//     for(j in i)
//     {
//         code=i.charCodeAt(j)

//             if(code>=97&&code<=122)
//             {
//                 alpha_count++
//             }
//             if(code>=48&&code<=57)
//             {
//                 num_count++
//             }

//     }
//     if(alpha_count>=1&&num_count>=1)
//     {
//         console.log(`The array of strings with numbers`,i);

//     }
// }
//**Method 2 */

// function mixed(arr)
// {
//     for(i of arr)
//     {
//         alpha_count=0;
//         num_count=0;
//         for(j in i)
//         {
//             code=i.charCodeAt(j)
//             if(code>=97&&code<=122)
//             {
//                 alpha_count++
//             }
//             if(code>=48&&code<=57)
//             {
//                 num_count++
//             }
//         }

//     if(alpha_count>=1&&num_count>=1)
//     {
//         console.log(`The mixed num&strings are`,i);

//     }
// }
// }
// mixed(["abc", "abc10"])
// mixed(["abc", "ab10c", "a10bc", "bcd"])

// 7.  Given a string s, return the longest
// Palindromic Substring

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// let str='babad'
// let longest=''
// for(i=0;i<str.length;i++)
// {
//     let emp=''
//     for(j=i;j<=str.length;j++)
//     {
//         emp+=str[j]
//     // console.log(emp);

//     if(emp.length>=2)
//     {
//         var rev=''
//         for(k=emp.length-1;k>=0;k--)
//         {
//             rev+=emp[k]
//         }

//     }
//     // console.log(rev);

//     if(emp===rev&&rev.length>longest.length)
//     {
//         longest=rev
//     }
// }
// }
// console.log(longest);
