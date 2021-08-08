class Thor {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("./sprites/thor.png");
    Composite.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    //to move Thor on mouse control
    pos.x = mouseX;
    pos.y = mouseY;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
  }
}
