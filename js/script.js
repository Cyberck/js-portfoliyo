window.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', function () {
		const header = document.querySelector('nav');
		header.classList.toggle('sticky', window.scrollY > 0);
	});

	const menuBtn = document.querySelector('.menu-btn'),
		navigation = document.querySelector('.navigation'),
		navigationItems = document.querySelectorAll('.navigation__link');


	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		navigation.classList.toggle('active');
	});

	navigationItems.forEach(navItem => {
		navItem.addEventListener('click', () => {
			menuBtn.classList.remove('active');
			navigation.classList.remove('active');
		});
	});

	const scrollBtn = document.querySelector('.scrollToTop-btn');
	window.addEventListener('scroll', () => {
		scrollBtn.classList.toggle('active', window.scrollY > 500);
	});
	scrollBtn.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	window.addEventListener('scroll', () => {
		let reveals = document.querySelectorAll('.reveal');
		for (let i = 0; i < reveals.length; i++) {
			let windowHeight = window.innerHeight;
			let revealTop = reveals[i].getBoundingClientRect().top;
			let revealPoint = 50;

			if (revealTop < windowHeight - revealPoint) {
				reveals[i].classList.add('active');
			}
		}
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


	/* **************** */


	let dushaev = document.querySelector('.brand'),
		// inputClass = document.querySelector('.input-class'),
		contactMessage = document.querySelector('.contact-message');

	dushaev.addEventListener('mouseenter', function () {
		if (this.textContent === 'Dushayev') {
			this.textContent = 'Bakhtiyor';
		}
		else if (this.textContent === 'Bakhtiyor') {
			this.textContent = 'Dushayev';
		}
		else {
			(this.textContent = 'Dushayev');
		}
	});

	// inputClass.addEventListener('input', function () {
	//     contactMessage.value = `My name is ${inputClass.value} and i want:`;
	// });

	/* ************************************************ */


	let aboutMe = document.querySelector('.about__title');
	aboutMe.addEventListener('mouseenter', function () {
		if (this.textContent === 'About Me') {
			this.textContent = 'Read please';
		}
		else if (this.textContent === 'Read please') {
			this.textContent = 'About Me';
		}
	});


	let skills = document.querySelector('.skills__title');

	skills.addEventListener('mouseenter', function () {
		if (this.textContent === 'My skills') {
			this.textContent = 'That\'s not all';
		}
		else if (this.textContent === 'That\'s not all') {
			this.textContent = 'My skills';
		}
	});

	let services = document.querySelector('.services__title');

	services.addEventListener('mouseenter', function () {
		if (this.textContent === 'My Services') {
			this.textContent = 'That\'s not all';
		}
		else if (this.textContent === 'That\'s not all') {
			this.textContent = 'My Services';
		}
	});

	let work = document.querySelector('.work__title');

	work.addEventListener('mouseenter', function () {
		if (this.textContent === 'My Work') {
			this.textContent = 'That\'s not all';
		}
		else if (this.textContent === 'That\'s not all') {
			this.textContent = 'My Work';
		}
	});

	let contact = document.querySelector('.contact__title');

	contact.addEventListener('mouseenter', function () {
		if (this.textContent === 'Contact Me') {
			this.textContent = 'I\'m waiting';
		}
		else if (this.textContent === 'I\'m waiting') {
			this.textContent = 'Contact Me';
		}
	});


});























// let photos = document.querySelectorAll('.items');

// function slideAnimate(active) {
//     photos[active].classList.add('active');

//     photos.forEach((items) => {
//         items.addEventListener('mouseenter', () => {
//             clearActive();
//             items.classList.add('active');
//         });
//     });
// }

// function clearActive() {
//     photos.forEach((item) => item.classList.remove('active'));
// }
// slideAnimate(0);


// let i = 0;
// function rek() {
//     console.log(i);
//     if (i < 100) {
//         i++;
//         rek();
//     }
// }
// rek();


