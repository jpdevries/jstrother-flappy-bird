var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.arc(150, 115, 30, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillRect(113, 50, 10, 40);
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;