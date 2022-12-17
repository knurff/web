"use strict"

const imgs = ['./imgs/cat1.webp', './imgs/cat2.png', './imgs/cat3.jpg', './imgs/cat4.jpg'];

const list = document.getElementById("list");
for(let i = 0; i < imgs.length; i++) {

    list.innerHTML+=
    `<button type="button" onclick="changeCat('${i}')" id="list-btn-${i}" class="list-img"><img id="list-img-${i}" src="${imgs[i]}"></button>`
}
const bigImg = document.getElementById("bigImg");
const bigImgSrc = imgs[imgs.length-1]
bigImg.style.backgroundImage = `url(${bigImgSrc})`;

function changeCat(id){
    document.getElementById("bigImg").style.backgroundImage = `url(${imgs[id]})`

}