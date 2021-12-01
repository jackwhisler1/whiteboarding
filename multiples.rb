# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# input: (10) -> output: 23
# What if a number is divisible by both? Number used once

# Determine if number is divisible by 3 or 5
# If yes, add to sum
# If divisible by 3 and 5, only add once

# Check if number is divisible by 3, 5, or both
# While loop up to 1000
def multiples_sum(num)
  i = 1
  sum = 0
  while i < num
    if i % 3 == 0 || i % 5 == 0
      sum += i
    end
    i += 1
  end
  sum
end

p multiples_sum(10)
p multiples_sum(1000)