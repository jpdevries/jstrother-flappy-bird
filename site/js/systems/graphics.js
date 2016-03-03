var GraphicsSystem = function(entities) {
    this.entities = entities;
};
GraphicsSystem.prototype.run = function() {
    for (var i = 0; i < 5; i++) {
        this.tick();
    }
};