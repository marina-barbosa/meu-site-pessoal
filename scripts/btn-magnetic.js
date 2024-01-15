let circles = document.querySelectorAll('.circle');

let btnMagnetic = document.querySelectorAll('.btn-magnetic').forEach(btnMagnetic => {
    // magnetismo
    btnMagnetic.addEventListener('mousemove', (event) => {
        let x = event.offsetX;
        let y = event.offsetY;
        let btnWidth = btnMagnetic.clientWidth;
        let btnHeight = btnMagnetic.clientHeight;
        let transX = (x - btnWidth / 2);
        let transY = (y - btnHeight / 2);
        btnMagnetic.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    })
    // reset position
    btnMagnetic.addEventListener('mouseout', (event) => {
        btnMagnetic.style.transform = '';
    })
    // circulo hover
    btnMagnetic.addEventListener('mousemove', (event) => {
        if (circles) {
            circles.forEach(circle => {
                circle.style.left = (event.offsetX - 25) + 'px';
                circle.style.top = (event.offsetY - 25) + 'px';
            });
        }
    });

})


let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('mousemove', (event) => {
        if (circles) {
            circles.forEach(circle => {
                circle.style.left = (event.offsetX - 25) + 'px';
                circle.style.top = (event.offsetY - 25) + 'px';
            });
        }
    });
});

