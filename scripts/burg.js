const btnBurg = document.querySelector('#burg');

function toggleMenu() {
    // anima o botao
    const toggles = document.querySelector('#toggles');
    toggles.classList.toggle('ativa');

    // mostra o nav    
    const nav = document.querySelector('#nav');
    nav.classList.toggle('hideMobile');

    const togglesWrap = document.querySelector('.toggles-wrap ');
    togglesWrap.classList.toggle('hideMobile');
}

btnBurg.addEventListener('click', toggleMenu);