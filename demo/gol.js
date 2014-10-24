var util = require('util');
var clc = require('cli-color');
var sleep = require('sleep');

var GameOfLife = require('./../src/gol');

var grid = [
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

// initialize

while (true) {
    resetConsole();
    
    printGrid(grid);

    // tick next generation

    sleep.sleep(1);
}

function printGrid(grid) {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid.length; j++) {
            process.stdout.write(util.inspect(grid[i][j], {
                depth: 99,
                colors: true
            }));
            process.stdout.write(' ');
        }
        process.stdout.write('\n');
    }
}

function resetConsole() {
    console.log(clc.reset);
    process.stdout.write(clc.moveTo(0, 0));
}
