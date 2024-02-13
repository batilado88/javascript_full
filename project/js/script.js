'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...'
    ]
};

let   adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      btn = document.querySelector('button'),
      addNewMovie = document.querySelector('.adding__input'),
      deleteMovieBtns = document.querySelectorAll('.delete'),
      checkbox = document.querySelectorAll('input')[2];

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

btn.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (addNewMovie.value == '') {
        return;
    } else if (addNewMovie.value.length > 21) {
        addNewMovie.value = `${addNewMovie.value.slice(0, 21)}...`;
    }

    if (checkbox.checked) {
        console.log('Добавляем любимый фильм');
    }

    movieDB.movies.push(addNewMovie.value.toUpperCase());

    movieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

});

console.log(deleteMovieBtns[0]);

// deleteMovieBtns = document.querySelectorAll('.delete');

btn.addEventListener('click', function() {
    deleteMovieBtns = document.querySelectorAll('.delete');
    deleteMovieBtns.forEach((btn, i) => {
        btn.addEventListener('click', function(evt) {
            evt.preventDefault();
            console.log(`есть клик! Это ${i} элемент списка`);
            document.querySelectorAll('.promo__interactive-item')[i].remove();
            console.log(movieDB.movies[i]);
    
        });
    });
});

deleteMovieBtns.forEach((btn, i) => {
    btn.addEventListener('click', function(evt) {
        evt.preventDefault();
        console.log(`есть клик! Это ${i} элемент списка`);
        document.querySelectorAll('.promo__interactive-item')[i].remove();
        console.log(movieDB.movies[i]);

    });
});





/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


