const isAnagram = (s, t) => {
  //check for edge case
  if (s.length !== t.length) return false;

  //create map to store chars
  const map = {};

  //loop over the first string
  //store each char in map and store count of chars
  //if char is already in the map add 1 to count
  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }

  //loop over the second string
  //check if char is in the map
  //if in map subtract 1 from count
  for (let char of t) {
    if (!map[char]) {
      return false;
    } else {
      map[char] = map[char] - 1;
    }
  }

  return true;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
