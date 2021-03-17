function sorting(array) {
    array.sort((a,b) => a-b);
    let newArray = [];
    let x = array.length / 2;
    
    for (let i = 0; i < x; i++) {
        
        let first = array.shift();
        let second = array.pop();
        newArray.push(first, second);
        
        
    }
    return newArray;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));