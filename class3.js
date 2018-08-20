// Shape - superclass
function Shape () {
}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

// superclass method
Shape.prototype.move = function (x, y) {
     this.X = x;
     this.Y = y;
}

// superclass method
Shape.prototype.distance_from_origin = function () {
     return Math.sqrt(this.X*this.X + this.Y*this.Y);
}

// superclass method
Shape.prototype.area = function () {
     throw new Error("I don't have a form yet");
}





// Square - subclass
function Square() {
}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.Width = 0;

// override method
Square.prototype.area = function () {
   return this.X * this.Y;
}






// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // subclass extends superclass
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  // Override method
  Rectangle.prototype.move = function(x, y) {
    Shape.prototype.move.call(this, x, y); // call superclass method
    log += 'Rectangle moved.\n';
  }
  
  // override method
  Rectangle.prototype.area = function () {
     return this.X * this.Y;
  }
  


//class 5 : pattern usage
var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());

var sq = new Square();
sq.move(-5, -5);
sq.X = 5;
sq.Y = sq.X;
console.log(sq.distance_from_origin());
console.log(sq.area());

var log = "";
var rect = new Rectangle();
rect.move(20, 20);
rect.X = 5;
rect.Y = 10;
log += ('Is rect an instance of Rectangle? ' + (rect instanceof Rectangle) + '\n'); // true
log += ('Is rect an instance of Shape? ' + (rect instanceof Shape) + '\n'); // true
console.log(log);
console.log(rect.distance_from_origin());
console.log(rect.area());
