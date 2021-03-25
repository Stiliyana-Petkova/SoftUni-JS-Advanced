function solve(input) {
    let str = input.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[i + 1] && str[i + 1] !== undefined) {
            isSame = false;
        } 
        sum += Number(str[i]);
    }
    console.log(`${isSame}\n${sum}`);
    
}

solve(2222222);
solve(1234);