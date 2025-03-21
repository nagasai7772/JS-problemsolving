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
