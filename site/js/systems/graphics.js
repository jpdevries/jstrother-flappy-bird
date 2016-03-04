var GraphicsSystem = function(entities) {
    this.entities = entities;
};
GraphicsSystem.prototype.run = function() {
    console.log("Running");
    for (var i = 0; i < 5; i++) {
        this.tick();
    }
};
GraphicsSystem.prototype.tick = function() {
    for (var i = 0; i < this.entities.length; i++) {
        var entity = this.entities[i];
        if ('graphics' in entity.components) {
            entity.components.graphics.draw(this.context);
        }
    }
};
exports.GraphicsSystem = GraphicsSystem;