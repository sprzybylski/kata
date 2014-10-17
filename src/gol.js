var Game = function (grid) {
    this.grid = grid;
};

Game.prototype.isAlive = function (x, y) {
    if (x < 0 || y < 0 || x > this.grid.length - 1 || y > this.grid.length - 1) {
        return false;
    }

    return !!this.grid[x][y];
};

Game.prototype.countAliveNeighbours = function (x, y) {
    return this.isAlive(x - 1, y - 1)
         + this.isAlive(x, y - 1)
         + this.isAlive(x + 1, y - 1)
         + this.isAlive(x - 1, y)
         + this.isAlive(x + 1, y)
         + this.isAlive(x - 1, y + 1)
         + this.isAlive(x, y + 1)
         + this.isAlive(x + 1, y + 1);
};

Game.prototype.getNewValue = function (x, y) {
    var neighbours = this.countAliveNeighbours(x, y);

    if (this.isAlive(x, y) && neighbours === 2) {
        return 1;
    } else if (neighbours === 3) {
        return 1;
    } else {
        return 0;
    }
};

Game.prototype.nextGen = function () {
    var newGrid = [];
    this.grid.forEach(function (row, x) {
        if (!newGrid[x]) newGrid[x] = [];
        row.forEach(function (cell, y) {
            newGrid[x][y] = this.getNewValue(x, y);
        }, this);
    }, this);

    this.grid = newGrid;

    return this;
};

exports.Game = Game;
