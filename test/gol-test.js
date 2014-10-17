require('chai').should();

var gol = require('../src/gol');

describe('Game Of Life', function () {
    it('should tell if cell is alive', function () {
        var grid = [
            [1, 0, 1, 1],
            [0, 0, 1, 1],
            [1, 1, 0, 0],
            [1, 1, 0, 0]
        ];

        var game = new gol.Game(grid);

        game.isAlive(0, 0).should.be.true;
    });

    it('should tell if cell is dead', function () {
        var grid = [
            [1, 0, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 0, 0],
            [1, 1, 0, 0]
        ];

        var game = new gol.Game(grid);

        game.isAlive(0, 1).should.be.false;
    });

    it('should count alive neighbours', function () {
        var grid = [
            [0, 0, 1],
            [0, 1, 0],
            [0, 0, 0]
        ];

        var game = new gol.Game(grid);

        game.countAliveNeighbours(1, 1).should.be.equal(1);
    });

    it('should kill cell when none or only 1 neighbour', function () {
        var grid = [
            [0, 0, 1],
            [0, 0, 1],
            [0, 0, 0]
        ];

        var nextGen = new gol.Game(grid).nextGen();

        nextGen.isAlive(0, 2).should.be.false;
        nextGen.isAlive(2, 0).should.be.false;
    });

    it('should become alive when exactly 3 neighbours are alive', function () {
        var grid = [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0]
        ];

        var game = new gol.Game(grid);

        game.nextGen().isAlive(1, 1).should.be.true;
    });

    it('should survive when 2 or 3 neighbours alive', function () {
        var grid = [
            [0, 1, 1],
            [1, 1, 0],
            [1, 1, 0]
        ];

        var nextGen = new gol.Game(grid).nextGen();

        nextGen.isAlive(0, 2).should.be.true;
        nextGen.isAlive(2, 0).should.be.true;
    });

    it('should kill cell when more then 3 neighbours', function () {
        var grid = [
            [0, 1, 1],
            [1, 1, 0],
            [1, 1, 0]
        ];

        var game = new gol.Game(grid);

        game.nextGen().isAlive(1, 1).should.be.false;
    });

    it('should not become alive when only 2 neighbours', function () {
        var grid = [
            [0, 1, 1],
            [1, 1, 0],
            [1, 1, 0]
        ];

        var game = new gol.Game(grid);

        game.nextGen().isAlive(2, 2).should.be.false;
    });

    it('all cells should have value', function () {
        var grid = [
            [0, 1, 1],
            [1, 1, 0],
            [1, 1, 0]
        ];

        var game = new gol.Game(grid).nextGen();

        var length = 0;

        game.grid.forEach(function (row) {
            length += row.length;
        });

        length.should.equal(9);
    });
});
