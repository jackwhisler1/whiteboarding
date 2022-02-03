def find_missing_letter(string)
  arrayed_letters = [*string[0]..string[string.length-1]]
  hashed_letters = {}
  string.chars.each do |letter|
    hashed_letters[letter] = true
  end
  missing_letters = []
  arrayed_letters.each do |letter|
    if !hashed_letters[letter]
      missing_letters << letter
    end
  end
  if missing_letters == []
    return nil
  end
  return missing_letters.join("")
end

p find_missing_letter("opqrsuv")  #=> "t"
p find_missing_letter("xyz")      #=> nil
p find_missing_letter("hiklno")  #=> "jm"