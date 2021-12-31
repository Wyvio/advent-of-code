var fs = require('fs');

var gammaRate = '';
var epsilonRate = '';

var inputs = fs.readFileSync('input\\day3.txt', 'utf8').split('\r\n');

function mostCommonOccurenceIsZero(bit) {
    var zeroes = 0;
    var ones = 0;
    while (bit.length > 0) {
        if (bit.shift() == 0) {
            zeroes++;
        } else {
            ones++;
        }
    }

    return zeroes > ones;
}

function toDecimal(binary) {
    let number = 0;
    var bits = binary.split('');
    console.log(binary + "->>" + bits);
    for (i = bits.length - 1; i >= 0; i--) {
        number += bits.shift() * (2 ** i);
    }
    return number;
}

for (i = 0; i < inputs[0].length; i++) {
    var bit = [0];
    for (j = 0; j < inputs.length - 1; j++) {
        bit[j] = inputs[j].split('')[i];
    }

    if (mostCommonOccurenceIsZero(bit)) {
        gammaRate += '0';
        epsilonRate += '1';
    } else {
        gammaRate += '1';
        epsilonRate += '0';
    }
}

console.log(toDecimal(gammaRate) * toDecimal(epsilonRate));