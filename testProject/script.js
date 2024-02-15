'use strict';

const btns = document.querySelectorAll('button'),
       wrapper = document.querySelector('.btn-block');


// btns.forEach(button => {
//     button.addEventListener('click', event => {
//         button.classList.toggle('red');
//     });
// });

wrapper.addEventListener('click', event => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.dir(event.target);
        event.target.classList.toggle('red');
    }
});

let newBtn = document.createElement('button');
newBtn.classList.add('green');
wrapper.append(newBtn);

