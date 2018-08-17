const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const breakPoint = (window.innerHeight * 3) / 4
    const windowTop = window.pageYOffset + breakPoint;
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }
    })
}

window.addEventListener('scroll', debounce(function(){
    animeScroll();
    console.log('oi');
}, 150));

const go = (elem) => {
    window.scroll({       // 1
        top: document
      .querySelector( elem )
        .offsetTop,       // 2
        left: 0,
        behavior: 'smooth'// 3
     });
  }