
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.about__select-namePhoto'),
        tabsImgContent = document.querySelectorAll('.about__column-img'),
        tabsNameParent = document.querySelector('.about__select-tabs');


    function hideTabsImgContent() {
        tabsImgContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showTabsImgContent(i = 0) {
        tabsImgContent[i].classList.add('show', 'fade');
        tabsImgContent[i].classList.remove('hide');
    }
    hideTabsImgContent();
    showTabsImgContent();

    tabsNameParent.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target && e.target.classList.contains('about__select-namePhoto')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsImgContent();
                    showTabsImgContent(i);
                }
            });
        }
    });

    /* modal okno */

    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTriggerId);
    }

    modalTrigger.addEventListener('click', openModal);

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }



    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.style.display == 'block') {
            closeModal();
        }
    });

    const modalTriggerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    /* Forms */

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'images/form/spinner.svg',        
        success: "Thank's for submitting our form!",
        failure: 'Something went wrong...'
    };

    forms.forEach(item  => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMassage = document.createElement('img');
            statusMassage.src = message.loading;
            statusMassage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMassage);

            const r = new XMLHttpRequest();
            r.open('POST', 'server.php');

            r.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            r.send(json);

            r.addEventListener('load', () => {
                if (r.status === 200) {
                    console.log(r.response);
                    showThanksModal(message.success);
                    form.reset();                    
                        statusMassage.remove();                    
                } else {
                    showThanksModal(message.failure);
                }
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content"> 
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
});