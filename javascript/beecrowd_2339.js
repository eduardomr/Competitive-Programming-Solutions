var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var infos = lines[0].split(' ');

var perPerson = infos[1]/infos[0];

var result = perPerson < infos[2] ? 'N' : 'S';

console.log(result);