/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let n = s.length;
  for (let i = n - 1; i >= 0; i--) s.push(s[i]);
  s.splice(0, n);
  return s;
};
