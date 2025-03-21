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
