const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
})

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
})

ScrollReveal().reveal('#home', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
});

ScrollReveal().reveal('#trending', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
});

ScrollReveal().reveal('#about', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
});

ScrollReveal().reveal('#products', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
});