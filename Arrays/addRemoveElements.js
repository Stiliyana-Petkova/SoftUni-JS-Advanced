function solve(array) {
    
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        let number = 1;
        if(command == 'add') {
            number += i;
            newArray.push(number);
        } else if(command == 'remove') {
            newArray.pop();
        }  
    }
    if(newArray.length == 0) {
        console.log('Empty');
    } else {
        for (const line of newArray) {
            console.log(line);
        }
    }
}

solve(['add', 
'add', 
'add', 
'add']);
solve(['add', 
'add', 
'remove', 
'add', 
'add']);
solve(['remove', 
'remove', 
'remove']);