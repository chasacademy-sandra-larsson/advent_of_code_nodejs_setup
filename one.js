const fs = require('fs');
const data = fs.readFileSync('one.txt', 'utf8');
const lines = data.split('\n');
const pairs = lines.map(line => line.split('   '));

console.log(pairs);