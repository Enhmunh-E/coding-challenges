var romanToInt = function(s) {
    let symbols = ["I", "V", "X", "L", "C", "D", "M"];
    let numbers = [1, 5, 10, 50, 100, 500, 1000];
    let valueNow = 0;
    if (s.length == 1) {
        return numbers[symbols.indexOf(s[0])];
    }
    for (let i = 0; i < s.length-1; i++) {
        let indexF = symbols.indexOf(s[i]), indexS = symbols.indexOf(s[i+1]);
        if (indexF >= indexS) {
            valueNow+=numbers[indexF];
            if (i+1 == s.length-1) {
                valueNow+= numbers[indexS];
            }
        }else {
            valueNow+=numbers[indexS]-numbers[indexF];
            i++;
            if (i+1 == s.length-1) {
                valueNow+=numbers[symbols.indexOf(s[i+1])];
            }
        }
    }
    return valueNow;
};