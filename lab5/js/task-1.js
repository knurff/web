"use strict"

function count(width, height) {
    
    const perim = document.getElementById('perim');
    const square = document.getElementById('square');
    const diag = document.getElementById('diag');
    if(+width < 0 || +height < 0){
        perim.innerText= 'Некоректні параметри!';
        square.innerText= 'Некоректні параметри!';
        diag.innerText= 'Некоректні параметри!';
        return;

    }
    perim.innerText = 'Периметр: ' + 2*(width+height);
    square.innerText = 'Площа: ' + width*height;
    diag.innerText = 'Довжина діагоналі: ' + Math.sqrt(width**2 + height**2).toFixed(3);

}
const width = document.getElementById('width');
const height = document.getElementById('height');
let widthValue = +width.value;
let heightValue = +height.value;
count(widthValue, heightValue);
width.addEventListener('input', event => {
    widthValue = +event.target.value;
    count(widthValue, heightValue);
});

height.addEventListener('input', event => {
    heightValue = +event.target.value;
    count(widthValue, heightValue);
});


