window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.navigation a')


    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })
});


let dushaev = document.querySelector('.brand'),
    inputClass = document.querySelector('.input-class'),
    contactMessage = document.querySelector('.contact-message')

dushaev.addEventListener('mouseenter', function () {
    if(this.innerHTML === 'Dushaev'){
        this.innerHTML = 'Bakhtiyor';
    }
    else if(this.innerHTML === 'Bakhtiyor') {
        this.innerHTML = 'Dushaev';
    }
    else(this.innerHTML = 'Dushaev') 
});

inputClass.addEventListener('input', function () {
    contactMessage.value = `My name is ${inputClass.value} and i want:`
});


// novinka dlya adress

let adress = document.querySelector('.iconSo-adress'),
    adress__2 = document.querySelector('.iconSo-adress__2'),
    adress__3 = document.querySelector('.iconSo-adress__3'),
    adress__4 = document.querySelector('.iconSo-adress__4');

function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        seconds__2 = time.getSeconds() * 6,
        seconds__3 = time.getSeconds() * 6,
        seconds__4 = time.getSeconds() * 6;

    adress.style = `transform: rotate(${seconds}deg)`,
        adress__2.style = `transform: rotate(${seconds__2}deg)`,
        adress__3.style = `transform: rotate(${seconds__3}deg)`,
        adress__4.style = `transform: rotate(${seconds__4}deg)`;

    setTimeout(() => clock(), 1000);
}

clock();

let aboutMe = document.querySelector('.section-title')

aboutMe.addEventListener('mouseenter', function () {
    if (this.innerHTML === 'About Me') {
        this.innerHTML = 'Read please';
    }
    else if (this.innerHTML === 'Read please') {
        this.innerHTML = 'About Me';
    }
});

let fotos = document.querySelector('.myPhotos')

fotos.addEventListener('mouseenter', function () {
    if (this.innerHTML === 'My photos') {
        this.innerHTML = 'Enjoy';
    }
    else if (this.innerHTML === 'Enjoy') {
        this.innerHTML = 'My photos';
    }
});

let skills = document.querySelector('.skills-title')

skills.addEventListener('mouseenter', function () {
    if (this.innerHTML === 'My skills') {
        this.innerHTML = "That's not all";
    }
    else if (this.innerHTML === "That's not all") {
        this.innerHTML = 'My skills';
    }
})

let services = document.querySelector('.services-title')

services.addEventListener('mouseenter', function () {
    if (this.innerHTML === 'My Services') {
        this.innerHTML = "That's not all";
    }
    else if (this.innerHTML === "That's not all") {
        this.innerHTML = 'My Services';
    }
})

let work = document.querySelector('.work-title')

work.addEventListener('mouseenter', function () {
    if (this.innerHTML === 'My Work') {
        this.innerHTML = "That's not all";
    }
    else if (this.innerHTML === "That's not all") {
        this.innerHTML = 'My Work';
    }
})

let contact = document.querySelector('.contact-title')

contact.addEventListener('mouseenter', function () {
    if (this.innerHTML === 'Contact Me') {
        this.innerHTML = "I'm waiting";
    }
    else if (this.innerHTML === "I'm waiting") {
        this.innerHTML = 'Contact Me';
    }
})

let photos = document.querySelectorAll('.items');

function slideAnimate(active) {
    photos[active].classList.add('active');

    photos.forEach((items) => {
        items.addEventListener('mouseenter', () => {
            clearActive()
            items.classList.add('active');
        })
    })
}

function clearActive() {
    photos.forEach((item) => item.classList.remove('active'));
}
slideAnimate(0)









// for (let i = 0; i < photos.length; i++) {
//     photos[i].addEventListener('mouseleave', function() {
//         photos[i].classList.remove('active')
//     })
// }

// for (let i = 0; i < photos.length; i++) {
//     photos[i].addEventListener('mouseenter', function() {
//         photos[i].classList.add('active')
//     })
// }
// for (let i = 0; i < photos.length; i++) {
//     photos[i].addEventListener('mouseleave', function() {
//         photos[i].classList.remove('active')
//     })
// }


// let photos = document.querySelectorAll('.chehochu__box-imgOne');

// for (let i = 0; i < photos.length; i++) {
//     photos[i].addEventListener('mouseenter', function () {
//         photos[i].style.cssText = `width: 400px;`;
//         photos[i].style.zIndex = '999';
//         photos[i].style.height = '320px';
//     })
// }
// for (let i = 0; i < photos.length; i++) {
//     photos[i].addEventListener('mouseleave', function () {
//         photos[i].style.cssText = `width: 230px;`;
//         photos[i].style.zIndex = '888';
//         photos[i].style.height = '210px';
//     })
// }




// let i = 0;
// function rek() {
//     console.log(i);
//     if (i < 100) {
//         i++;
//         rek();
//     }
// }
// rek();


