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
