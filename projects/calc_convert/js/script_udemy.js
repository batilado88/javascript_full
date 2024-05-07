'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');   
    request.setRequestHeader('Content-type', 'application/json; charset = utf-8'); 
    request.send();


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            // inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
            console.log(inputRub.value);
            console.log(data.current.usd);
        } else {
            inputUsd.value = 'Ой-ёй-ёй - Сбой!';
        }
    })
});

inputUsd.addEventListener('input', () => {
        const request = new XMLHttpRequest();
    
        request.open('GET', 'js/current.json');   
        request.setRequestHeader('Content-type', 'application/json; charset = utf-8'); 
        request.send();
    
    
        request.addEventListener('load', () => {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                // inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
                inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
                console.log(inputRub.value);
                console.log(data.current.usd);
            } else {
                inputRub.value = 'Ой-ёй-ёй - Сбой!';
            }
            
        })


});

