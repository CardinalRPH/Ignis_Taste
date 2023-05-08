import { get_all_data } from './globals/data';

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

document.getElementById('jumbotron').style.backgroundImage = "url(./public/images/heros/hero-image_2.jpg)";
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

//old
// import data from '../DATA.json';

// for (let i in data.restaurants) {
//     document.querySelector('#grid-container-1').innerHTML += `
//     <card-post
//                     src="${data.restaurants[i].pictureId}"
//                     alt="" food="${data.restaurants[i].name}" ratting="${data.restaurants[i].rating}" city="${data.restaurants[i].city}" desc="${data.restaurants[i].description}"></card-post>
//     `;
// }
//end old


const getAllData = () => {
    get_all_data().then((data) => {
        if (data.restaurants.length !=0) {
            homeBuilder(data);
        } else {
            // is_null();
        }
    }).catch((error) => {
        console.log(error);
        // let cuserror = new ErrorHandler("Api can't Load Character Query");
        // throw cuserror;
    });
}

const homeBuilder = (data) => {
    for (let i in data.restaurants) {
        document.querySelector('#grid-container-1').innerHTML += `
        <card-post
                        src="${data.restaurants[i].pictureId}"
                        alt="" food="${data.restaurants[i].name}" rating="${data.restaurants[i].rating}" city="${data.restaurants[i].city}" desc="${data.restaurants[i].description}"> res-id="${data.restaurants[i].id}"</card-post>
        `;
    }
}

window.addEventListener('load', () => {
    getAllData();
});

