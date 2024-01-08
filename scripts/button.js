var button = document.querySelector('.myButton');
var circle = document.querySelector('.circle');

button.addEventListener('mouseenter', function () {
    circle.style.display = 'block';
});

button.addEventListener('mouseleave', function () {
    circle.style.display = 'none';
});

document.addEventListener('mousemove', function (event) {
    if (circle.style.display === 'block') {        
        circle.style.left = (event.pageX-385) + 'px';
        circle.style.top = (event.pageY-10) + 'px';
    }
});
