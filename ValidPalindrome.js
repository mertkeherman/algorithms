const isPalindrome = (s) => {
  //remove all spezial chars and empty spaces (sanitize)
  s = s.toLowerCase().replace(/[\W_]/g, "");

  //create pointers
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  //check if left === right while left< right
  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }

  return true;
};

s = "A man, a plan, a canal: Panama",

console.log(isPalindrome(s));
