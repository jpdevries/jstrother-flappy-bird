var PhysicsSystem = function(entities) {
    this.entities = entities;
    this.interval = null;
};
PhysicsSystem.prototype.run = function() {
    // run the update loop
    this.interval = window.setInterval(this.tick.bind(this), 1000 /60);
};
PhysicsSystem.prototype.tick = function() {
    var time = new Date().getTime();
    var delta = (time - this.time) / 1000;
    this.time = time;

    for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!'physics' in entity.components) {
            continue;
        }

        entity.components.physics.update(1/60);
    }
    //this.collisionSystem.tick();
};
exports.PhysicsSystem = PhysicsSystem;
