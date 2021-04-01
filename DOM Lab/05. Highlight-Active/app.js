function focus() {
    let input = document.querySelectorAll('input');
    
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', onFocus);
        input[i].addEventListener('blur', onBlur);

        function onFocus(e) {
            e.target.parentNode.className = 'focused';

        }

        function onBlur(e) {
            e.target.parentNode.className = '';
        }
     
    }

  
}