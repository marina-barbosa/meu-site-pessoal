let marker = document.querySelector('.underline');
let item = document.querySelectorAll('nav label');

function indicator(event){
    marker.style.left = event.offsetLeft - 506 + 'px';
    marker.style.width = event.offsetWidth + 'px';
}

item.forEach(link => {
    link.addEventListener('click', (event) =>{
        indicator(event.target);
    })
})