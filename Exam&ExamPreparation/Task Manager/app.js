function solve() {
    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');
    const addBtn = document.querySelector('#add');
    const [section, secOpen, secInProgress, secComplete] = document.querySelectorAll('section');
    const [label, labelDescrip, labelDate] = document.querySelectorAll('label');



    addBtn.addEventListener('click', addItem);

    function addItem(e) {
        e.preventDefault();

        if (!task.value || !description.value || !date.value) {
            return;
        };

        const div1 = secOpen.lastElementChild;
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = task.value;

        const p1 = document.createElement('p');
        p1.textContent = `${labelDescrip.textContent}: ${description.value}`;

        const p2 = document.createElement('p');
        p2.textContent = `${labelDate.textContent}: ${date.value}`;

        const div2 = document.createElement('div');
        div2.setAttribute('class', 'flex');

        const startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.setAttribute('class', 'green');
        startBtn.addEventListener('click', onStart);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('class', 'red');
        deleteBtn.addEventListener('click', (e) => {
            article.remove();
        });

        div2.appendChild(startBtn);
        div2.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div2);
        div1.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';

        function onStart(e) {

            const delB = document.createElement('button');
            delB.textContent = 'Delete';
            delB.setAttribute('class', 'red');
            delB.addEventListener('click', () => {
                article.remove();
            })

            finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.setAttribute('class', 'orange');
            finishBtn.addEventListener('click', onFinish)


            div2.removeChild(startBtn);
            div2.removeChild(deleteBtn);
            div2.appendChild(delB);
            div2.appendChild(finishBtn);

            const divInProgress = secInProgress.lastElementChild;
            divInProgress.appendChild(article);

        function onFinish(e) {
                delB.remove();
                finishBtn.remove();
                const divComplete = secComplete.lastElementChild;
                divComplete.appendChild(article);
            }

        }


    }



}