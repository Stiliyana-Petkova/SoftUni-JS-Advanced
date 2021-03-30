function sumTable() {
    let result = document.querySelector('#sum');

    let input = document.querySelectorAll('tr');
    let sum = 0;
    

    for (let i = 1; i < input.length; i++) {
        sum += Number(input[i].lastChild.textContent);
        
    }
    result.textContent = sum;
}