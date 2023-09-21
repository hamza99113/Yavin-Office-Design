// Add custom JavaScript here
function userScroll(){
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () =>{
        if(window.scrollY > 50){
            navbar.classList.add('navbar-sticky');
        } else{
            navbar.classList.add('navbar-sticky');
        }
    })
}

function incrementStats(){
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter)=>{
        counter.innerText = 0;

        const updateCounter = () => {
            // + sign indicates a number in JS
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if(c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1)
            } else{
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}


function toTopButton(){
    const navbar = document.querySelector('.to-top-btn');
    window.addEventListener('scroll', () =>{
        if(window.scrollY > 50){
            navbar.classList.add('show');
        } else{
            navbar.classList.remove('show');
        }
    })
}


// script.js
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopButton = document.getElementById(".to-top-btn");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.addEventListener('DOMContentLoaded', toTopButton);