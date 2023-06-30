var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var result = lines[0] * 300 + lines[1] * 1500 + lines[2] * 600 + lines[3]*1000 + lines[4] * 150 + 225;

console.log(result)