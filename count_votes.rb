# Given an array of strings, return a hash that provides of a count of how many times each string occurs.

# Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

# Output: {"Dewey" => 6, "Truman" => 5}

# Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

# loop through array 
# Keep track of unique values, add the unique to a hash, if already there add to the value of that key. Initial example {"Dewey": 1}
# Return hash
# Ignore case (.downcase)

{
  "apple": 3,
  "happy" => 5,
  hello: 5, 
}

def count_votes(array)
  hash = {}
  array.each do |word|
    word_check = word.downcase
    if hash[word_check]
      hash[word.downcase] += 1 
      # add one if word is in hash
    else
      hash[word.downcase] = 1
    end
  end
  return hash
end

p count_votes(["DeWey", "Truman", "dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "TrUman", "Dewey", "Dewey"])