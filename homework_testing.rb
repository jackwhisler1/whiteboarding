def split_array(array, n)
  new_array = []
  array.each_slice(n) { |slice| new_array << slice }
  new_array
end

p split_array([0, 1, 2, 3, 4, 5], 2) 
p split_array([0, 1, 2, 3, 4, 5], 3)