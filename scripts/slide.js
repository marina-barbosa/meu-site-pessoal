//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carrosselDom = document.querySelector('.carrossel');
let SliderDom = carrosselDom.querySelector('.carrossel .lista-carrossel');
let thumbnailBorderDom = document.querySelector('.carrossel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item-thumb');
let timeDom = document.querySelector('.carrossel .carregamento');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 12000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carrossel .lista-carrossel .item-carrossel');
    let thumbnailItemsDom = document.querySelectorAll('.carrossel .thumbnail .item-thumb');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carrosselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carrosselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carrosselDom.classList.remove('next');
        carrosselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}