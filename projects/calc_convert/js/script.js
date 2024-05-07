'use strict';

const inputRUB = document.querySelector('#rub'),
      inputGEL = document.querySelector('#gel');


inputRUB.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json');   
    request.setRequestHeader('Content-type', 'application/json; charset = utf-8'); 
    request.send();


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            let dataRate = 100 / (data[0].currencies[33].rate);
            inputGEL.value = (+inputRUB.value / dataRate).toFixed(2);

        } else {
            inputGEL.value = 'Ой-ёй-ёй - Сбой!';
        }
    });
});


inputGEL.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json');   
    request.setRequestHeader('Content-type', 'application/json; charset = utf-8'); 
    request.send();


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            let dataRate = 100 / (data[0].currencies[33].rate);
            inputRUB.value = (+inputGEL.value * dataRate).toFixed(2);

        } else {
            inputRUB.value = 'Ой-ёй-ёй - Сбой!';
        }
    });
});

