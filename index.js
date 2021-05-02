// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        function addSides(total, side) {
            return total + side;
        }
        return this.sides.reduce(addSides, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {
        const sideOneCheck = this.sides[0] < this.sides[1] + this.sides[2];
        const sideTwoCheck = this.sides[1] < this.sides[0] + this.sides[2];
        const sideThreeCheck = this.sides[2] < this.sides[0] + this.sides[1];

        if (sideOneCheck && sideTwoCheck && sideThreeCheck) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {

    get isValid() {
        return (this.sides.every(side => side === this.sides[0]) ? true : false);
    }

    get area() {
        return this.sides[0] ** 2;
    }
}

