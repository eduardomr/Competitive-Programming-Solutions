var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var aux = parseInt(lines.shift());
var count = 0;

for (let i = 0; i < aux; i++) {

    let elements = lines[i].split(' ');
    count = (count + (elements[0] * elements[1]));
}
console.log(count);
