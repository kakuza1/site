'use strict'

let contacts = document.getElementById('changePhone');
let phone = document.getElementById('phone');
console.log(contacts);
console.log(phone);
function changeColor(){
    // phone.addEventListener('click', function(){
        phone.style.backgroundColor = 'orange'; /*Сюда записывается цвет при наведении*/
        setTimeout(function(){
          phone.style.backgroundColor = '#ffa50000'; /*А сюда - каким он будет через 5 секунд */
        },3000); /* 5000 = 5 секунд (в миллисекундах) */  

};


contacts.addEventListener('click', changeColor)