var basicCalculator = function(s) {
    const stack = []
    let operator = '+'
    let num = 0

    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        const digit = char.charCodeAt(0) - 48
        if(digit >= 0 && digit <= 9)
            num = num * 10 + digit
        if ((char !== ' ' && (digit < 0 || digit > 9)) || i === s.length - 1) {
            switch(operator) {
                case '+':
                    stack.push(num)
                break;
                    case '-':
                        stack.push(-num)
                    break;
                case '*':
                    stack.push(stack.pop() * num)
                    break;
                case '/':
                    stack.push(Math.trunc(stack.pop() / num))
                    break;
            }

            operator = char
            num = 0
        }
    }

    return stack.reduce((sum, val) => sum + val, 0)
}