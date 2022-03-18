function makeRed() {
     document.body.style.backgroundColor = 'red';
}

// handling blue button click by setting function name and taking the elemnet

const bluebutton = document.getElementById('make-blue-buttom');
// just set the name of function
bluebutton.onclick = makeblue;

function makeblue() {
     document.body.style.backgroundColor = 'blue';
}


// Using anonyoumous function
const greenButton = document.getElementById('make-green-button')
greenButton.onclick = function () {
     document.body.style.backgroundColor = 'green'
}


// handled by using eventListener
const goldenbutton = document.getElementById('make-goldenrod-button');
goldenbutton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
     document.body.style.backgroundColor = 'goldenrod'
}


// handled by using eventListener but gave the whole function inside eventlistener
const hotPinkButton = document.getElementById('make-hotpink-button')
hotPinkButton.addEventListener('click', function makepink() {
     document.body.style.backgroundColor = 'hotpink'
})

// 1 line system
document.getElementById('make-lightblue-button').addEventListener('click', function () {
     document.body.style.backgroundColor = 'lightblue'
})