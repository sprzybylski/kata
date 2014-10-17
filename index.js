var util = require('util');
var clc = require('cli-color');
var sleep = require('sleep');

var gol = require('./src/gol');

var matrix = [
    [1, 0, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0]
];

console.log(clc.reset);
process.stdout.write(clc.moveTo(0, 0));

while (true) {
    console.log(clc.reset);
    process.stdout.write(clc.moveTo(0, 0));
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            process.stdout.write(util.inspect(matrix[i][j], {
                depth: 99,
                colors: true
            }));
            process.stdout.write(' ');
        }
        process.stdout.write('\n');
    }

    matrix = gol.nextGen(matrix);

    sleep.sleep(1);
}
