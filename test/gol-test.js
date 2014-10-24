require('chai').should();

var GameOfLife = require('../src/gol');

describe('Game Of Life', function () {
    it('should be defined', function () {
        GameOfLife.should.not.be.undefined;
    });
});
