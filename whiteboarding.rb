# Write a function that takes in an array of numbers and returns the largest product of any two numbers in the array.
# example input [3, -40, 80.3, 204, .23]
# example output => 16381.2

# Clarify
# Give an example input with the expected output (describe the data types for both).


# Ask the interviewer to confirm the input/output is correct & ask any clarifying questions.


# Visualize
# Solve the problem without using code (using visuals, pseudocode, charts, etc).
# If you’re stuck, decompose the problem and solve a simpler problem first.

# Write a function that takes in an array of numbers
# Write a function that takes in an array of numbers and loops through each index and prints each number 
# Write a function that takes in an array of numbers and loops through each index and finds the largest number, shovel that into new array
# Write a function that takes in an array of numbers and loops through each index and finds the largest number, shovel that into new array, and delete that number from og array
# Write a function that takes in an array of numbers and loops through each index and finds the largest number, shovel that into new array, and delete that number from og array, repeat finding largest
def biggest_product(arr)
  largest = arr[0]
  arr.each do |num|
    if num > largest
      largest = num
    end    
  end
  
  largest_index = arr.find_index(largest)
  arr.delete_at(largest_index)
  second_largest = arr[0]

  arr.each do |num|
    if num > second_largest
      second_largest = num
    end    
  end

  largest * second_largest
end
p biggest_product([1000, 3, -40, 80.3, 204, 204, 0.23])


# Verify
# Use the example input to see if your approach produces the expected output.
# Go through the example step by step and keep track of how the information changes.
# Code
# Convert your visualized solution into actual code.
# Describe each step out loud as you write the code.
hello sir
