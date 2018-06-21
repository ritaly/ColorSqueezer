'use strict';

let arrBlocks = document.querySelectorAll('.color-block');

function randColor() {
   return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

function addColor() {
    let hexCode = randColor();
    this.style.backgroundColor = hexCode;
    this.getElementsByTagName("p")[0].innerHTML = hexCode;
}

arrBlocks.forEach(block => block.addEventListener('click', addColor));