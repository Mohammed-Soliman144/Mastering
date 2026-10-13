/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let n1 = 0
    let n2 = 0
    for(let i = 0; i < num1.length; i++) {
        // const digit = getDigit(num1[i])
        n1 = (n1 * 10) + num1[i].charCodeAt(0) - 48 
        console.log(num1[i].charCodeAt(0) - 48 )
    }

    for(let i = 0; i < num2.length; i++) {
        // const digit = getDigit(num2[i])
        n2 = (n2 * 10) + num2[i].charCodeAt(0) - 48 
        console.log(num2[i].charCodeAt(0) - 48)
        console.log(n2)
    }
    const result = "" + n1 * n2

    console.log(n1, typeof n1, n2, typeof n2)
    return result
};


const getDigit = (char) => {
    switch(char.charCodeAt(0)) {
        case 48:
            return 0;
        case 49:
            return 1;
        case 50:
            return 2;
        case 51:
            return 3;
        case 52: 
            return 4;
        case 53:
            return 5;
        case 54:
            return 6;
        case 55:
            return 7;
        case 56:
            return 8;
        case 57:
            return 9;
    }
}