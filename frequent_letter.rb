# Given a string, find the most commonly occurring letter.

# Input: “peter piper picked a peck of pickled peppers”
# Output: “p
# Split string into individ characters array
# Loop through array, add letter to hash and initial count to 1, if in hash add to count

def frequent_letter(str)
  letters = {}
  letters_arr = str.split("") 
  p letters_arr
  letters_arr.each do |letter|
    if letters[letter]
      letters[letter] += 1
    else 
      letters[letter] = 1
    end 
  end
  return letters.max_by { |_k, v| v }[0]
end
p frequent_letter("peter piper picked peck")