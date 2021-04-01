const btn = document.querySelector('button');
btn.addEventListener('click', deleteByEmail);

function deleteByEmail() {
    const input = document.querySelector('input');
    const name = Array.from(document.querySelectorAll('tbody tr td'));
    const result = document.querySelector('#result');

    for (let i = 1; i < name.length; i += 2) {

        if (input.value == name[i].textContent.trim()) {
            name[i].parentNode.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.'
        }

    }


}