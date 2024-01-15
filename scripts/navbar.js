document.addEventListener('DOMContentLoaded', function () {

    // NAVBAR COM Z-INDEX E EFEITOS DATA-TAB

    let home = document.querySelector('#home');
    let skill = document.querySelector('#skills');
    let project = document.querySelector('#projetos');
    let experience = document.querySelector('#exp');
    let contact = document.querySelector('#contato');

    let aHref = document.querySelectorAll('input');

    let active = 'home';
    let zIndex = 600;

    aHref.forEach(input => {
        input.addEventListener('click', function (event) {
            if (window.innerWidth <= 825) {
                toggleMenu();
            }
            let tab = input.dataset.tab;
            if (tab !== null && tab !== active) {

                let activeOld = document.querySelector('.tab.active');
                if (activeOld) activeOld.classList.remove('active');
                active = tab;

                let tabActive = document.getElementById(active);
                zIndex++;
                tabActive.style.zIndex = zIndex;
                tabActive.style.setProperty('--x', event.clientX + 'px');
                tabActive.style.setProperty('--y', event.clientY + 'px');
                tabActive.classList.add('active');
            }

        })
    })
});

