var GraphicsSystem = function(entities) {
    this.entities = entities;
    this.canvas = document.getElementById('main-canvas');
    this.context = this.canvas.getContext('2d');
};
GraphicsSystem.prototype.run = function() {
    console.log("Running");
    window.requestAnimationFrame(this.tick.bind(this));
};
GraphicsSystem.prototype.tick = function() {
    // Sets the canvas to the correct size if the window is resized
    if (this.canvas.width != this.canvas.offsetWidth || this.canvas.height != this.canvas.offsetHeight) {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    // Clears the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Rendering
    for (var i = 0; i < this.entities.length; i++) {
        var entity = this.entities[i];
        if (!'graphics' in entity.components) {
            continue;
        }
        entity.components.graphics.draw(this.context);
    }
};
exports.GraphicsSystem = GraphicsSystem;