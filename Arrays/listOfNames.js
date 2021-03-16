function list(array) {
    let count = 0;

    array.sort((a,b) => a.localeCompare(b));
    
    for (let line of array) {
        count++;
        console.log(`${count}.${line}`);
    }

}

list(["John", "Bob", "Christina", "Ema"]);