var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var num = parseInt(lines);

const fac = (number) => {
    if (number < 0) {
        return false
    }
    return number === 0 ? 1 : number * fac(number - 1);
}

console.log(fac(num));