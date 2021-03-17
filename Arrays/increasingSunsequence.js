function subSequence(array) {
    let newArray = [];
    let theBiggest = 0;

    for (let i = 0; i < array.length; i++) {
        if(theBiggest <= array[i]) {
            theBiggest = array[i];
            newArray.push(theBiggest);
        }
        
    }
    return newArray;
}

console.log(subSequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
subSequence([1, 
    2, 
    3,
    4]);
subSequence([20, 
    3, 
    2, 
    15,
    6, 
    1]);