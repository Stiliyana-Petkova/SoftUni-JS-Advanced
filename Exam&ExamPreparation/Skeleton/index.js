function solve() {
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addModule);
    const select = document.querySelector('select');
    const modules = document.querySelector('.modules');

    function addModule(e) {

        e.preventDefault();

        let forms = Array.from(document.querySelectorAll('.form-control'));
        const name = forms[0].children[1].value;
        const date = forms[1].children[1].value;
        let [time, clock] = date.split('T');



        let collection = select.selectedOptions;


        for (let i = 0; i < collection.length; i++) {
            if (collection[i].label == 'Select module...' || !name || !date) {
                return;
            } else {

                const module = document.createElement('div')
                module.setAttribute('class', 'module');
                const h = document.createElement('h3');
                h.textContent = `${collection[i].label.toUpperCase()}-MODULE`;
                module.appendChild(h);
                const ul = document.createElement('ul');
                const li = document.createElement('li');
                li.setAttribute('class', 'flex');
                const h4 = document.createElement('h4');
                h4.textContent = `${name} - ${time.split('-').join('/')} - ${clock}`;
                const deleteBtn = document.createElement('button')
                deleteBtn.setAttribute('class', 'red');
                deleteBtn.textContent = 'Del';
                deleteBtn.addEventListener('click', function () {
                    ul.removeChild(li);

                    if (Array.from(ul.children).length == 0) {
                        module.remove();
                    }
                });
                li.appendChild(h4);
                li.appendChild(deleteBtn);
                ul.appendChild(li);
                module.appendChild(ul);
                modules.appendChild(module);

            };
        };
    };
}