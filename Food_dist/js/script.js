'use strict';

window.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent'),
      tabHeader = document.querySelector('.tabheader__items');


function hideTab() {
    tabContent.forEach((item) => {
        // item.style.cssText = 'display: none';
        item.classList.remove('show');
        item.classList.add('hide');
    }
);}

function showTab(i = 0) {
    tabContent[i].classList.remove('hide');
    tabContent[i].classList.add('show');
    // tabContent[i].style.cssText = 'display: block';
}

tabHeader.addEventListener('click', event => {
    // console.log('1');
    let target = event.target;
    // console.log(tabHeader);

    tabs.forEach((item, i) => {
    item.classList.remove('tabheader__item_active');
        if (target && target.textContent == item.textContent) {
            
            item.classList.add('tabheader__item_active');
            hideTab();
            showTab(i);
        }
    });
});


});