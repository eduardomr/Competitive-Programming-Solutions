var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var valores = {pretend:lines[0].split(' ').shift(), pista:lines[0].split(' ')[1]}
var result = parseInt(valores.pretend) % parseInt(valores.pista)

console.log(result)