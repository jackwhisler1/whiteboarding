  # def find_longest_word(string)

  #   array = string.split

  #   word_length = []
  #   array.map do |x|
  #     word_length << x.length
  #   end
    
  #   return array[word_length.index(word_length.max)]
      
  # end

  # p find_longest_word("What if I had a asefadki stupidly  long word?")

  # Write a method called find_longest_word, which will accept a string as a parameter (usually a sentence), and return another string that will be the longest word in that sentence.
  # function take a string
  # string convert into an array words
  # loop throughh and check length of each word
  # keep track of the longest
  # return the longest

  def longest_word(str)
    words = str.split(" ") 
    longest_word = ""
    words.each do |word|
      if word.length > longest_word.length
        longest_word = word
      end
    end
    longest_word 
  end
  p longest_word("What if I had a asefadki stupidly  long word?")
