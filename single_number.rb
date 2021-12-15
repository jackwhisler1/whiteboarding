# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

# loop through array and build hash from it. add 1 to the hash key 
# pull out the key with a value of 1 (?) sort? 
def single_number(nums)
  h = {}
  nums.each do |num|
    if h[num]
      h.delete(num)
    else
      h[num] = 1
    end
  end
  h.keys.first
end
p single_number([4,1,2,1,2])