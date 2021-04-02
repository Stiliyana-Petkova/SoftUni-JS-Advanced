function addItem() {
    let input = document.querySelector('#newItemText');
    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    document.querySelector('#items').appendChild(newElement);
}