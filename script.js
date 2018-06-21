'use strict';
//Global Variables
const hexChars = '0123456789ABCDEF';

let arrBlocks = document.querySelectorAll('.color-block');

//Function to generate random hex code

function randColor() {
    let hexCode = '#';
    for(let i=0; i<=5; i++) {
        let randNum = Math.floor(Math.random() * 16);
        hexCode += hexChars[randNum];
    } 
    return hexCode;
}

//Function to change page color & text 

function addColor() {
    let hexCode = randColor();
    this.style.backgroundColor = hexCode;
    this.getElementsByTagName("p")[0].innerHTML = hexCode;
}

arrBlocks.forEach(block => block.addEventListener('click', addColor));