var isPalindrome = function (x) {
  if (!Number.isInteger(x)) return false;
  if (x < 0) return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
