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

setTimer('.timer', deadline);



// Modal window

const modalWindow = document.querySelector('.modal'),
      modalBtn = document.querySelectorAll('[data-modal]'),
      modalCloseBtn = document.querySelector('.modal__close');


// console.log(modalBtn);

function openModal() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    clearTimeout(modalTimer);
}

modalBtn.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', openModal);
});

function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        closeModal();
    }
    // console.dir(e.target);
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
        closeModal();
        // console.log(111);
    }
});


let modalTimer = setTimeout(openModal, 15000);

function openModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', openModalByScroll);
    }
}

window.addEventListener('scroll', openModalByScroll);



// Используем классы для карточек

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.rate = 92;
        this.parent = document.querySelector(parentSelector);
        this.convertToRUB();
    }

    convertToRUB() {
        this.price = this.price * this.rate;
    }

    render() {
        let element = document.createElement('div');

        if (this.classes.length === 0) {
            this.classes.push('menu__item');
        }

        this.classes.forEach((className) => {
            element.classList.add(className);
        });

        element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>'
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>`;
        this.parent.append(element);
    }
}


new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',

).render();

new MenuCard(
    'img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container',
    'menu__item'
).render();

new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .container',
    'menu__item'
).render();




// the end
});
