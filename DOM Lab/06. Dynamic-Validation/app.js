function validate() {
    const input = document.querySelector('#email');
    const regex = /[a-z]+@[a-z]+\.[a-z]+/g;

    input.addEventListener('change', onChange);

    function onChange(e) {
        let isValid = regex.test(input.value);
        if(!isValid) {
            e.target.className = 'error';
            input.value = '';
        } else {
            e.target.className = '';
            input.value = '';
        }
    }
}