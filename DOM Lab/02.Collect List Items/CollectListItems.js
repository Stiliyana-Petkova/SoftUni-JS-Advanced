function extractText() {
    
    let input = document.querySelectorAll('li');
    let result = document.querySelector('#result');
    Array.from(input).forEach(i => result.textContent += i.textContent + '\n')

}