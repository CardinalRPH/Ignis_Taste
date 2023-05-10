// import { get_all_data } from './data/restaurantData';

document.querySelector('#nav-icon3').addEventListener('click', () => {
    if (document.querySelector('#nav-icon3').classList.contains('open')) {
        document.querySelector('.skip-link').classList.remove('none');
    } else {
        document.querySelector('.skip-link').classList.add('none');
    }
    document.querySelector('#nav-icon3').classList.toggle('open');
    document.querySelector('#drawer').classList.toggle('open');
    document.querySelector('body').classList.toggle('open');
    document.querySelector('main').classList.toggle('open');
    if (window.scrollY <= document.querySelector('nav').offsetHeight) {
        for (let i = 0; i < document.querySelectorAll('#nav-icon3 span').length; i++) {
            if (document.querySelectorAll('#nav-icon3 span')[i].classList.contains('scroll-black-bg')) {
                document.querySelectorAll('#nav-icon3 span')[i].classList.remove('scroll-black-bg');
            } else {
                document.querySelectorAll('#nav-icon3 span')[i].classList.add('scroll-black-bg');
            }
        }
        for (let i = 0; i < document.querySelectorAll('.aClass').length; i++) {
            if (document.querySelectorAll('.aClass')[i].classList.contains('scroll-black')) {
                document.querySelectorAll('.aClass')[i].classList.remove('scroll-black');
            } else {
                document.querySelectorAll('.aClass')[i].classList.add('scroll-black');
            }
        }
    }
});
const mynav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (mynav !== null) {
        if (window.scrollY > mynav.offsetHeight) {
            mynav.classList.add('scroll');
            document.querySelector('.nav-img').children[0].children[0].classList.add('scroll');
            for (let i = 0; i < document.querySelectorAll('.aClass').length; i++) {
                document.querySelectorAll('.aClass')[i].classList.add('scroll-black');
            }
            for (let i = 0; i < document.querySelectorAll('#nav-icon3 span').length; i++) {
                document.querySelectorAll('#nav-icon3 span')[i].classList.add('scroll-black-bg');
            }
        }
        else {
            mynav.classList.remove('scroll');
            document.querySelector('.nav-img').children[0].children[0].classList.remove('scroll');
            for (let i = 0; i < document.querySelectorAll('.aClass').length; i++) {
                document.querySelectorAll('.aClass')[i].classList.remove('scroll-black');
            }
            for (let i = 0; i < document.querySelectorAll('#nav-icon3 span').length; i++) {
                document.querySelectorAll('#nav-icon3 span')[i].classList.remove('scroll-black-bg');
            }
        }
    }
});

if (window.innerWidth >= 900) {
    document.querySelector('#nav-icon3').classList.remove('open');
    document.querySelector('#drawer').classList.remove('open');
    document.querySelector('body').classList.remove('open');
    document.querySelector('main').classList.remove('open');
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        document.querySelector('#nav-icon3').classList.remove('open');
        document.querySelector('#drawer').classList.remove('open');
        document.querySelector('body').classList.remove('open');
        document.querySelector('main').classList.remove('open');
    }
    if (window.scrollY <= mynav.offsetHeight) {
        for (let i = 0; i < document.querySelectorAll('.aClass').length; i++) {
            document.querySelectorAll('.aClass')[i].classList.remove('scroll-black');
        }
        for (let i = 0; i < document.querySelectorAll('#nav-icon3 span').length; i++) {
            document.querySelectorAll('#nav-icon3 span')[i].classList.remove('scroll-black-bg');
        }
    }
});


