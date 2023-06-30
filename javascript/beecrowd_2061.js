var input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

var initial = {
    abas: parseInt(lines[0].split(' ')[0]),
    acoes: parseInt(lines[0].split(' ')[1])
}

for (let i = 1; i <= initial.acoes; i++) {
    switch (lines[i]) {
        case 'clicou':
            initial.abas--;
            break;
        case 'fechou':
            initial.abas ++;
            break;
        default:
            break;


    }
}

console.log(initial.abas);
