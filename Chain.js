class Chain {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.09,
            length: 5
        }
        this.chain = Constraint.create(options);
        Composite.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        stroke("grey")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
