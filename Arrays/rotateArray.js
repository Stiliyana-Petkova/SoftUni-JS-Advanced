function rotate(array, n) {
    

    for (let i = 0; i < n; i++) {
        let element = array.pop();
        array.unshift(element);
        
    }
    console.log(array.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2);
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);