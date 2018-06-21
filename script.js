'use strict';

let arrBlocks = document.querySelectorAll('.color-block');

function randColor() {
   return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function addColor() {
    let hexCode = randColor();
    this.style.backgroundColor = hexCode;
    this.getElementsByTagName("p")[0].innerHTML = hexCode;
}

arrBlocks.forEach(block => block.addEventListener('click', addColor));