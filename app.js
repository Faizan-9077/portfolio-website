const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');

const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

const nav_links = document.querySelectorAll('.nav-list ul li a');

const header = document.querySelector('.header .container');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

nav_links.forEach(link => {
    link.addEventListener('click', () => {
        hamb.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    var header = document.getElementById('header');
    if(scroll_position>250) {
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});