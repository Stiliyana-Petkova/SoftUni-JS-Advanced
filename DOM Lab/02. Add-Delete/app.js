function addItem() {
    const input = document.querySelector('#newText');
    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    
    
    let btn = document.createElement('a');
    btn.textContent = '[Delete]';
    btn.href = '#';
    
    btn.addEventListener('click', onClick);

    function onClick(ev) {
        ev.target.parentNode.remove();
    }

    newLi.appendChild(btn);
    document.querySelector('#items').appendChild(newLi);
    input.value = '';
}