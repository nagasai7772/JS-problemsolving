// Write a program that takes a string, string should be of even length. Divide the string into two equals parts, check the number of vowels in both the parts of the string. If both parts of string have same number of vowels then return true otherwise return false.

// Testcase1	:  rebels
// Output     	:  true
// Explanation 	:  Given sring rebels divided into two parts, reb and els. In both parts vowels count is same that is 1(e is presented in both the parts) so it returns true.

// Testcase2	:  apples
// Output     	:  true

// Testcase1	:  mars
// Output     	:  false

let str = "logicc";
let part1 = "";
let part2 = "";
let vowels = "aeiou";
let part1count = 0;
let part2count = 0;
if (str.length % 2 == 0) {
  divided_str = Math.floor(str.length / 2);
  for (i = 0; i < divided_str; i++) {
    part1 += str[i];
    // console.log(part1)
    if (vowels.includes(str[i]) && str[i] != " ") {
      part1count++;
    }
  }
  console.log(part1count);

  for (j = str.length - 1; j >= divided_str; j--) {
    part2 += str[j];
    if (vowels.includes(str[j]) && str[j] != " ") {
      part2count++;
    }
  }
  console.log(part2count);

  if (part1count == part2count) {
    console.log("In Both Strings has same vowel count");
  } else {
    console.log("Vowel count doesn't match");
  }
} else {
  console.log("The string Length Must be Even ");
}
// Find the Longest Word

// Problem: Write a function to find the longest word in a string.
// Testcase 1:
// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"
// // 

let str="The quick brown fox jumps over the lazy dog"
let currentword=''
let longestword=''
let maxlength=0
for(i=0;i<str.length;i++)
{
  if(str[i]!=undefined&&str[i]!=' ')
  {
    currentword+=str[i]
  }
  else
  {
    if(currentword.length>maxlength)
    {
      maxlength=currentword.length
      longestword=currentword
    }
    currentword=''
  }
}

console.log('The longestword in a string is : ',longestword)
// Check for Anagrams

// Problem: Write a function to check if two strings are anagrams of each other.
// Testcase 1:
// Input: "listen", "silent"
let str1='hello';
let str2='ellop';
if(str1.length==str2.length)
{
    emp=''
  for(i of str1)
  {
    if(!emp.includes(i))
    {
      emp+=i
    }
  }
  is_anagram=true
  for(i of emp)
  {
    count1=0
    count2=0
    for(j of str1)
    {
      if(i==j)
      {
        count1++
      }
    }
    for(k of str2)
    {
      if(i==k)
      {
        count2++
      }
    }
      
    if(count1!==count2)
    {
      is_anagram=false
      break
    }
  }
  if(is_anagram)
  {
    console.log('Both are Anagrams')
  }
  else
  {
    console.log('characters mismatch')
  }
  
}
else
{
  console.log('Not Anagrams')
}


















