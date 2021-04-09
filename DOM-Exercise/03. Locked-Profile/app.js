function lockedProfile() {
    const btn = Array.from(document.querySelectorAll('button'));

    btn.forEach(b => {
        b.addEventListener('click', onClick);
    })


    function onClick(e) {

        const div = e.target.parentNode.querySelector('div');
        const isLocked = e.target.parentNode.querySelector('input[type=radio]:checked').value == 'lock';

        if (!isLocked && e.target.textContent == 'Show more') {

            div.style.display = 'block';
            e.target.textContent = 'Hide it';

        } else if (!isLocked && e.target.textContent == 'Hide it') {

            div.style.display = 'none';
            e.target.textContent = 'Show more';

        } else {
            return;
        }

    }
}