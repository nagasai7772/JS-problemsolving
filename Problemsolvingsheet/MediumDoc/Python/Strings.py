// Write a program that takes a string, string should be of even length. Divide the string into two equals parts, check the number of vowels in both the parts of the string. If both parts of string have same number of vowels then return true otherwise return false.

// Testcase1	:  rebels
// Output     	:  true
// Explanation 	:  Given sring rebels divided into two parts, reb and els. In both parts vowels count is same that is 1(e is presented in both the parts) so it returns true.

// Testcase2	:  apples
// Output     	:  true

// Testcase1	:  mars
// Output     	:  false
str_val = 'logicc'
part1 = ''
part2 = ''
vowels = 'aeiou'
part1count = 0
part2count = 0

if len(str_val) % 2 == 0:
    divided_str = len(str_val) // 2

    # First half
    for i in range(divided_str):
        part1 += str_val[i]
        if str_val[i] in vowels:
            part1count += 1

    

    # Second half
    for j in range(len(str_val) - 1, divided_str - 1, -1):
        part2 += str_val[j]
        if str_val[j] in vowels:
            part2count += 1

    

    # Comparing vowel counts
    if part1count == part2count:
        print('Both halves have the same vowel count')
    else:
        print("Vowel count doesn't match")

else:
    print('The string length must be even')
// Find the Longest Word

// Problem: Write a function to find the longest word in a string.
// Testcase 1:
// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"
str_val = "The quick brown fox jumps over the lazy dog"
currentword = ''
longestword = ''
maxlength = 0

for i in range(len(str_val)):
    if str_val[i] != ' ':
        currentword += str_val[i]
    else:
        if len(currentword) > maxlength:
            maxlength = len(currentword)
            longestword = currentword
        currentword = ''  # Reset current word

# Check the last word (since there's no trailing space)
if len(currentword) > maxlength:
    longestword = currentword

print("The longest word in the string is:", longestword)
// Check for Anagrams

// Problem: Write a function to check if two strings are anagrams of each other.
// Testcase 1:
// Input: "listen", "silent"
str1 = 'listen'
str2 = 'silent'

if len(str1) == len(str2):
    emp = ''
    for i in str1:
        if i not in emp:
            emp += i

    is_anagram = True

    for i in emp:
        count1 = 0
        count2 = 0

        for j in str1:
            if i == j:
                count1 += 1
        
        for k in str2:
            if i == k:
                count2 += 1

        if count1 != count2:
            is_anagram = False
            break

    if is_anagram:
        print('Both are Anagrams')
    else:
        print('Characters mismatch')
else:
    print('Not Anagrams')
// Find the First Non-Repeating Character

// Problem: Write a function to find the first non-repeating character in a string.
// Testcase 1:
// Input: "swiss"
// Output: 'w'
str = 'swiss'
emp = ''
for i in str:
    if i not in emp:
        emp += i

temp = ''
for i in emp:
    count = 0
    for j in str:
        if i == j:
            count += 1
    if count == 1:
        temp += i
        break

print('The Non-repeating first character in a string is:', temp)

// Reverse Words in a String

// Problem: Write a function to reverse the order of words in a given string.
// Testcase 1:
// Input: "hello world"
// Output: "world hello"
str='hello world'
word=''
reversed_str=''
for i in range(len(str)-1,-1,-1):
  if str[i]!=' ':
    word=str[i]+word
  else:
    reversed_str+=word+' '
    word=''
    
reversed_str+=word
print('The reversed string is :',reversed_str)
