var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var a = parseInt(lines.shift())
var count = -1;
var aux = null;

for (let i = 0; i <= a; i++) {
    if (lines[i] != aux) {
        aux = lines[i];
        count = count + 1;
    }
}

console.log(count)