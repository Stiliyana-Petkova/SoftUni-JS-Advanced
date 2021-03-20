function solve() {

    const buttons = document.querySelectorAll('button');
    const screenBtn = buttons[0].addEventListener('click', onScreen);
    const clearBtn = buttons[1].addEventListener('click', clear);
    const inputs = Array.from(document.querySelectorAll('input'));

    const [ul1, ul2] = Array.from(document.querySelectorAll('ul'));


    function onScreen(e) {
        e.preventDefault();

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        if (!name || !hall || !price) {
            
            return;
        }

        name.value = '';
        hall.value = '';
        price.value = '';

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(strong);

        const div = document.createElement('div');
        const strong2 = document.createElement('strong');
        strong2.textContent = price.toFixed(2);
        div.appendChild(strong2);

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        div.appendChild(input);

        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        div.appendChild(archiveBtn);
        li.appendChild(div);
        ul1.appendChild(li);
        archiveBtn.addEventListener('click', (e) => {
            if(!input.value) {
                return;
            }

            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = e.target.parentNode.parentNode.children[0].textContent;
            li.appendChild(span);
            

            const strong = document.createElement('strong');
            const sum = Number(e.target.parentNode.children[0].textContent) * Number(input.value);
            strong.textContent = `Total amount: ${sum.toFixed(2)}`;
            li.appendChild(strong);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            ul2.appendChild(li);
            
            deleteBtn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })

            
 
        });


    }

    function clear(e) {
       const el =  e.target.previousElementSibling;
       console.log(el.remove());
    }
}