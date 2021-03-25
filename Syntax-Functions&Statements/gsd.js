function solve(x, y) {

    while(y !== 0) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}


solve(15,5);
solve(2154, 458);