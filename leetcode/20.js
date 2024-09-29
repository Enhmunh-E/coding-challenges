const transForm = (c) =>
  c == "(" || c == ")" ? 1 : c == "[" || c == "]" ? 2 : 3;
const isValid = (s, stack = []) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") stack.push(transForm(s[i]));
    else if (stack.pop() !== transForm(s[i])) return false;
  }
  return stack.length == 0;
};
