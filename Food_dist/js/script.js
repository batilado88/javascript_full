'use strict';

// Tabs

window.addEventListener('DOMContentLoaded', () => {
    
const tabContent = document.querySelectorAll('.tabcontent'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabsParent = document.querySelector('.tabheader__items');


// console.log(tabContent);

function hideTab() {
    tabContent.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide');
    });
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}

function showTab(i = 0) {
    tabContent[i].classList.remove('hide'); 
    tabContent[i].classList.add('show');   
    tabs[i].classList.add('tabheader__item_active');  
}
    
hideTab();
showTab();
    

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    
    tabs.forEach((item, i) => {

        if (target && item == target) {
            hideTab();
            showTab(i);
        }

    });
});
// the end
});


// Timer

const deadline = '2024-05-20';

function timeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / (1000 * 60) % 60)),
          seconds = Math.floor((t / (1000) % 60));


          return {total: t, days, hours, minutes, seconds};
}

function addZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function setTimer(selector, endtime) {
    let timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateTimer, 1000);
        updateTimer();
    
        function updateTimer() {
            let t = timeRemaining(endtime);
            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = hours.innerHTML = minutes.innerHTML = seconds.innerHTML = addZero(0);
            }
        }
}


// console.log(timeRemaining(deadline));

setTimer('.timer', deadline);





















// X3 зачем это то что дальше, внизу..


// window.addEventListener('DOMContentLoaded', () => {

// const tabs = document.querySelectorAll('.tabheader__item'),
//       tabContent = document.querySelectorAll('.tabcontent'),
//       tabHeader = document.querySelector('.tabheader__items');


// function hideTab() {
//     tabContent.forEach((item) => {
//         // item.style.cssText = 'display: none';
//         item.classList.remove('show');
//         item.classList.add('hide');
//     }
// );}

// function showTab(i = 0) {
//     tabContent[i].classList.remove('hide');
//     tabContent[i].classList.add('show');
//     // tabContent[i].style.cssText = 'display: block';
// }

// hideTab();
// showTab(0);

// tabHeader.addEventListener('click', event => {
//     // console.log('1');
//     let target = event.target;
//     // console.log(tabHeader);

//     tabs.forEach((item, i) => {
//     item.classList.remove('tabheader__item_active');
//         if (target && target.textContent == item.textContent) {
            
//             item.classList.add('tabheader__item_active');
//             hideTab();
//             showTab(i);
//         }
//     });
// });


// });