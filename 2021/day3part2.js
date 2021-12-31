
var fs = require('fs');

var inputs = fs.readFileSync('input\\day3.txt', 'utf8').split('\r\n');
var oxygenRating = inputs.slice(0, inputs.length);
var co2Rating = inputs.slice(0, inputs.length);

function mostCommonOccurenceIsZero(bit) {
    var zeroes = 0;
    var ones = 0;
    for (k = 0; k < bit.length; k++) {
        if (bit[k] == 0) {
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
    //console.log(binary + "->>" + bits);
    for (i = bits.length - 1; i >= 0; i--) {
        number += bits.shift() * (2 ** i);
    }
    return number;
}

// find oxygen generator rating
for (i = 0; i < oxygenRating[0].length && oxygenRating.length > 2; i++) {
    var bit = [0];
    for (j = 0; j < oxygenRating.length - 1; j++) {
        bit[j] = oxygenRating[j].charAt(i);
    }

    if (mostCommonOccurenceIsZero(bit)) {
        for (j = 0; j < oxygenRating.length - 1; j++) {
            if (oxygenRating[j].charAt(i) == '1') {
                oxygenRating.splice(j, 1);
                j--;
            }
        }
    } else {
        for (j = 0; j < oxygenRating.length - 1; j++) {
            if (oxygenRating[j].charAt(i) == '0') {
                oxygenRating.splice(j, 1);
                j--;
            }
        }
    }
}

console.log(toDecimal(oxygenRating[0]));

// find co2 scrubber rating
for (i = 0; i < co2Rating[0].length && co2Rating.length > 2; i++) {
    var bit = [0];
    for (j = 0; j < co2Rating.length - 1; j++) {
        bit[j] = co2Rating[j].charAt(i);
    }

    if (!mostCommonOccurenceIsZero(bit)) {
        for (j = 0; j < co2Rating.length - 1; j++) {
            if (co2Rating[j].charAt(i) == '1') {
                co2Rating.splice(j, 1);
                j--;
            }
        }
    } else {
        for (j = 0; j < co2Rating.length - 1; j++) {
            if (co2Rating[j].charAt(i) == '0') {
                co2Rating.splice(j, 1);
                j--;
            }
        }
    }
}

console.log(toDecimal(co2Rating[0]));