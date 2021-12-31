var fs = require('fs');
var forward = 0;
var depth = 0;

var input = fs.readFileSync('input\\day2.txt', 'utf8').split('\n');

while (input.length > 1) {
    var instructions = input.shift().split(' ');
    console.log(instructions);
    var direction = instructions[0];
    var distance = instructions[1] * 1;

    if (direction == 'forward') {
        forward += distance;
    } else if (direction == 'down') {
        depth += distance;
    } else {
        depth -= distance;
    }
}

console.log(forward * depth);