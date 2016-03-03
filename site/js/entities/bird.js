var Bird = function () {
    console.log('Creating Bird Entity');
    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    this.components = {
        graphics: graphics
    };
};
exports.Bird = Bird;