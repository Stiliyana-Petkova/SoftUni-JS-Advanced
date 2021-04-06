function toggle() {

    let text = document.querySelector('#extra');
    let button = document.querySelector('.button');
    
    if(button.textContent == 'More') {
        button.textContent = 'Less';
        text.style.display = 'block'
    } else {
        button.textContent = 'More';
        text.style.display = 'none'
    }

    
}