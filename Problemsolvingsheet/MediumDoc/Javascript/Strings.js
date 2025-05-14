// Write a program that takes a string, string should be of even length. Divide the string into two equals parts, check the number of vowels in both the parts of the string. If both parts of string have same number of vowels then return true otherwise return false.

// Testcase1	:  rebels
// Output     	:  true
// Explanation 	:  Given sring rebels divided into two parts, reb and els. In both parts vowels count is same that is 1(e is presented in both the parts) so it returns true.

// Testcase2	:  apples
// Output     	:  true

// Testcase1	:  mars
// Output     	:  false

let str = "rebels";
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
// Find the First Non-Repeating Character

// Problem: Write a function to find the first non-repeating character in a string.
// Testcase 1:
// Input: "swiss"
// Output: 'w'
let str='swiss'
let emp=''
for(i of str)
{
  if(!emp.includes(i))
  {
    emp+=i
  }
}
temp=''
for(i of emp)
{
count=0
  for(j of str)
  {
    if(i==j)
    {
      count++
    }
  }
  if(count==1)
  {
    temp+=i
    break
  }
}
console.log('The Non-repeating first character in a string is :', temp)

// Reverse Words in a String

// Problem: Write a function to reverse the order of words in a given string.
// Testcase 1:
// Input: "hello world"
// Output: "world hello"
let str='hello world'
let reverse_str=''
let word=''
for(i=str.length-1;i>=0;i--)
{
  if(str[i]!=' ')
  {
    word=str[i]+word
  }
  else
  {
    reverse_str+=word+' '
    word=''
  }
}
reverse_str+=word
console.log('The reversed string is :',reverse_str)
// Find the Longest Palindromic Substring

// Problem: Write a function to find the longest palindromic substring in a given string.
// Testcase 1:
// Input: "babad"
// Output: "bab"

let str='babad'
let longeststr=''
for(i=0;i<str.length;i++)
{
  emp=''
  for(j=i;j<str.length;j++)
  {
    emp+=str[j]
    if(emp.length>=2)
    {
      rev=''
      for(k=emp.length-1;k>=0;k--)
      {
        rev+=emp[k]
      }
      if(emp==rev&&emp.length>longeststr.length)
      {
        longeststr=emp
      }
    }
  }
}
console.log('The longest palindromic substring :',longeststr)

// // String Compression
// // `
// // Problem: Write a function to perform basic string compression using the counts of repeated characters.
// // Testcase 1:
// // Input: "aabcccccaaa"
// // Output: "a2b1c5a3"

let str='aabcccccaaa'
let count=1
let countofstrings=''
for(i=0;i<str.length;i++)
{
  if(str[i]==str[i+1])
  {
    count++
  }
  else
  {
    countofstrings+=str[i]+count
    count=1
  }
}
console.log('The count of repeated characters in a string is :',countofstrings)

// // Find All Permutations of a String

// // Problem: Write a function to find all permutations of a given string.
// // Testcase 1:
// // Input: "abc"
// // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

let str='abc'
let arr=[]
for(i of str)
{
  for(j of str)
  {
    if(i==j)
    {
      
    }
    else
    {
      arr.push(i+j)
    }
  }
}
let permarr=[]
for(i of str)
{
  for(j of arr)
  {
    if(!j.includes(i))
    {
      permarr.push(i+j)
    }
  }
}
console.log('The max possible permutations in string ',permarr)






let str1 = 'abcde';
let str2 = 'cdeab';
let concatdtr=str1+str1
let isrotate=false
if(str1.length!=str2.length)
{
  console.log('Not A Rotational String')
}
else
{
  for(i=0;i<concatdtr.length-str2.length;i++)
  {
    ismatch=true
    for(j=0;j<str2.length;j++)
    {
      if(concatdtr[i+j]!=str2[j])
      {
        ismatch=false
        break
      }
    }
    if(ismatch)
    {
      isrotate=true
      break
    }
  }
}
if(isrotate)
{
  console.log(str2,' is a Rotational string of ',str1)
}
else
{
  console.log(str2,'is not a Rotational string',str1)
}







