'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.about__column-select_namePhoto'),
        tabsImgContent = document.querySelectorAll('.about__column-img_card'),
        tabsNameParent = document.querySelector('.about__column-select_tabs');


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

        if (target && e.target.classList.contains('about__column-select_namePhoto')) {
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
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.addEventListener('click', () => {
        modal.style.display = 'block';    
        document.body.style.overflow = 'hidden';    
    });

    function closeModal () {
        modal.style.display = 'none';
        document.body.style.overflow = ''; 
    }
    
    modalCloseBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })
    
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.style.display == 'block') {
            closeModal();
        }
    })
});