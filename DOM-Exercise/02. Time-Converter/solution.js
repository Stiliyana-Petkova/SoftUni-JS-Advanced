function attachEventsListeners() {

    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const mins = document.querySelector('#minutes');
    const sec = document.querySelector('#seconds');

    const buttons = Array.from(document.querySelectorAll('input[type=button]'));
    buttons.forEach(b => {
        b.addEventListener('click', onClick);
    })


    function onClick(e) {

        if (e.target.id == 'daysBtn') {
            hours.value = Number(days.value * 24);
            mins.value = Number(hours.value * 60);
            sec.value = Number(mins.value * 60);
        } else if (e.target.id == 'hoursBtn') {
            days.value = Number(hours.value / 24);
            mins.value = Number(hours.value * 60);
            sec.value = Number(mins.value * 60);

        } else if (e.target.id == 'minutesBtn') {
            hours.value = Number(mins.value / 60);
            days.value = Number(hours.value / 24);
            sec.value = Number(mins.value * 60);

        } else if (e.target.id == 'secondsBtn') {
            hours.value = Number(mins.value / 60);
            mins.value = Number(sec.value / 60);
            days.value = Number(hours.value / 24);
        }
    }

}