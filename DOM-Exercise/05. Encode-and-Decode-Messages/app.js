function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const [input1, input2] = Array.from(document.querySelectorAll('textarea'));
    let array = [];
    let array2 = [];


    buttons.forEach(b => {
        b.addEventListener('click', onClick);
    });

    function onClick(e) {
        
        if(e.target.textContent == 'Encode and send it') {
            
            let arr = Array.from(input1.value);
            for(let char of arr) {
                let n = Number(char.charCodeAt(0)) + 1;
                array.push(String.fromCharCode(n))
            }
         input2.value = array.join('');
         input1.value = '';
           
        } else {

            let arr = Array.from(input2.value);
            for(let char of arr) {
                let n = Number(char.charCodeAt(0)) - 1;
                array2.push(String.fromCharCode(n))
            }
         input2.value = array2.join('');
            
        }
    }
}