def split_array(array, number)
  array.each_slice(number).to_a
end

p split_array([0, 1, 2, 3, 4, 5], 7) 