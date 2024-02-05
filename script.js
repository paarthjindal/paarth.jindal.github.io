var typed = new Typed(".text", {
    strings: ["Back end developer", "Front end developer", "Sportsman"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleNav() {
    var nav = document.querySelector('.design_nav');
    nav.style.display = (nav.style.display === 'flex' || nav.style.display === '') ? 'none' : 'flex';
}




