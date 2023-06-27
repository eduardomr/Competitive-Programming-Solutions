var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var num = parseInt(lines.shift());

const quad = (number) => number * number;
const cub = (number) => quad(number) * number;


for(let i = 1; i<= num; i++){
    console.log(i + ' ' + quad(i) +' '+ cub(i))
}