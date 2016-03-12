var graphicsComponent = require("../components/graphics/bird");

var Bird = function () {
    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    this.components = {
        graphics: graphics
    };
};
exports.Bird = Bird;