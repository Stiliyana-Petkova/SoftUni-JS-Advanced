function solve(a) {

    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
    
}

//console.log(solve(1));
console.log(solve(1)(6)(-3));