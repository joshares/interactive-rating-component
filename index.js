'use strict;'

const btnsOpen = document.querySelectorAll('.btn')
const btnSubmit = document.querySelector('.submit')
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const Thank = document.querySelector('.p-2')

one = 1;
two = 2;
three = 3;
four = 4;
five = 5;

btnsModal = [one, two, three, four, five]

for (let i = 0; i < btnsOpen.length; i++)btnsOpen[i].addEventListener('click', function () {
 Thank.textContent = `You selected  ${btnsModal[i]} out of 5 `;
});

btnSubmit.addEventListener('click', function(){
 section1.classList.add('hidden')
 section2.classList.remove('hidden')
})
