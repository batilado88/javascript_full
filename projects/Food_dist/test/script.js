const btn = document.querySelector('.btn');
      

function myAnimation() {

    let pos = 0;
    let box = document.querySelector('.box');

    let timer = setInterval(frame, 10);
    
    function frame() {
        if (pos == 300) {
            clearInterval(timer);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
            
        }
    }
}


btn.addEventListener('click', () => {
    myAnimation();
});
