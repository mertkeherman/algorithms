const containsDuplicate =  (nums) => {
  const map = {};

  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = true;
    }
  }
  return false;
};

nums = [1,2,3,1]

console.log(containsDuplicate(nums));
