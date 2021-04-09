function addItem() {
    const text = document.querySelector('#newItemText');
    const textValue = document.querySelector('#newItemValue');
    const menu = document.querySelector('#menu');
    
    const option = document.createElement('option');
    option.textContent = text.value + textValue.value;
    menu.appendChild(option);
    text.value = '';
    textValue.value = '';

}