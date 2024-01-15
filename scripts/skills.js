
const divsPai = document.querySelectorAll('#skills .linha div');

divsPai.forEach(div => {
    div.addEventListener('mouseover', (event) => {

        const icon = event.currentTarget.querySelector('i');
        icon.classList.toggle('colored');

        const span = event.currentTarget.querySelector('span');
        span.classList.toggle('gold');

    });
});
