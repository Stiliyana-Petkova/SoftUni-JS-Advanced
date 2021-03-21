class Point {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    static distance(a,b) {
        if(a instanceof Point == false || b instanceof Point == false) {
            throw new TypeError('Parameter must be of type Point')
        };
        return Math.sqrt((a.p1 - b.p1) ** 2 + (a.p2 - b.p2) ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));