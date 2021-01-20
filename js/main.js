///////////////////     Burger Menu    

const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');


burger.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    burger.classList.remove('burger--fixed');
    body.classList.remove('overlay');
    

    if(!menu.classList.contains('active')) {
        menu.classList.add('active');
        body.classList.add('overflow');
        body.classList.add('overlay');
        burger.classList.add('burger--active');
    } else {
        menu.classList.remove('active');
        body.classList.remove('overflow');
    }


    if(form.classList.contains('active')) {
        form.classList.remove('active');
        phoneMenu.classList.remove('menu--hide');
    }
    
});

document.documentElement.addEventListener('click', function(e){
    if(!e.target.closest('.burger')){

    burger.classList.remove('burger--active');
    menu.classList.remove('active');
    body.classList.remove('overlay', 'overflow');


    }
});


menu.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    
    if(!form.classList.contains('active')) {
        menu.classList.remove('active');
        body.classList.remove('overflow');
        body.classList.remove('overlay');
        
    }
});

/////// Open Form for Mobile

const formBtn = document.querySelector('.btn--phone');
const form = document.querySelector('.form--phone');
const phoneMenu = document.querySelector('.menu');


formBtn.addEventListener('click', function () {
    if(!menu.classList.contains('active')) {
        menu.classList.add('active');
        body.classList.add('overflow');
        form.classList.add('active');
        phoneMenu.classList.add('menu--hide');
        burger.classList.add('burger--active');
        burger.classList.add('burger--fixed');
    } else {
        menu.classList.remove('active');
        body.classList.remove('overflow');
        form.classList.remove('active');
        phoneMenu.classList.remove('menu--hide');
        burger.classList.remove('burger--active');
        burger.classList.remove('burger--fixed');
    }
});

///// animation
var $target = $('.show');
var hold = 120;


$.each($target, function(i,t){
     var $this = $(t);
     setTimeout(function(){ 
        $this.show().css('display', 'flex'); },i*hold);
});

///// hero video play

$('[data-fancybox]').fancybox({

    buttons : [ 
    'close'
  ],
    btnTpl:{
        close: '<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="">'+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg>' + "</button>"
    },

    autostart: true,
    loop: true,
    protect: true,
    slideShow: false,


});


/*const playBtns = document.querySelectorAll('.btn-play');
const heroVideo = document.querySelector('.hero-video');

playBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        if(!heroVideo.classList.contains('playing')) {
            heroVideo.classList.add('playing')
            
        } else {
            heroVideo.classList.remove('playing');
        }    
    });
});
*/

/*=================Form popup========================*/

const popupBtn = document.querySelector('#popup_form_btn');
const popupWindow = document.querySelector('#popup_form');
const popupClose = document.querySelector('.popup_form_close');

popupBtn.addEventListener('click', function(e){
    e.preventDefault();
    popupWindow.classList.add('popup_form--active');
    body.classList.add('noscrol');
    wrapper.classList.add('overflow');
});

popupClose.addEventListener('click', function(e){
    e.preventDefault();
    popupWindow.classList.remove('popup_form--active');
    body.classList.remove('noscrol');
    wrapper.classList.remove('overflow');
});

/*===============Sidebar Gallery======================*/

const modalBtn = document.querySelectorAll('.portfolio__item');
const modalClose = document.querySelectorAll('.sidebar__close');
const modals = document.querySelectorAll('.modals');
const modalSidebar = document.querySelectorAll('.sidebar');


    modalBtn.forEach(function(item){
        item.addEventListener('click', function(e){
            
            let currentBtn = item;
            let modalId = currentBtn.getAttribute('data-modal');
            let currentModal = document.querySelector(modalId);


            function closeModal(){
                currentModal.classList.add('modals--hidden');
                body.classList.remove('noscrol');

                modalSidebar.forEach(function(item){
                    item.classList.remove('sidebar_active');
                });

                document.querySelectorAll('.preloader_item').forEach(function(item){
                    item.classList.add('preloader_item--start'); 
                });

                window.setTimeout(function () {
                     document.querySelectorAll('.sidebar__wrapper').forEach(function(item){
                        item.classList.remove('sidebar_wr_scrol');
                    });
                    document.querySelectorAll('.preloader__wrapper').forEach(function(item){
                        item.style = 'display:flex';
                    });
                }, 700);
            }
            
            e.preventDefault();

            modals.forEach(function(item){
                item.classList.add('modals--hidden');
            });
    /*--------------------------------*/
            currentModal.classList.remove('modals--hidden');
            body.classList.add('noscrol');

            modalSidebar.forEach(function(item){
                item.classList.add('sidebar_active');
            }); 

            document.querySelectorAll('.preloader_item').forEach(function(item){
                item.classList.remove('preloader_item--start'); 
            });

            window.setTimeout(function () {
                document.querySelectorAll('.sidebar__wrapper').forEach(function(item){
                    item.classList.add('sidebar_wr_scrol');
                });
                document.querySelectorAll('.preloader__wrapper').forEach(function(item){
                    item.style = 'display:none';
                });
            }, 1800);
                
    /*--------------------------------*/
            modalClose.forEach(function(item){
                item.addEventListener('click', function(event){
                    e.preventDefault();

                    closeModal();
                });
            });
    /*--------------------------------*/
            modals.forEach(function(item){
                item.addEventListener('click', function(event){
                    if (event.target == currentModal){
                        closeModal();
                    }
                });
            });
    /*--------------------------------*/
            document.querySelectorAll('.sidebar_back').forEach(function(item){
                 item.addEventListener('click', function(e){
                    e.preventDefault();
                        closeModal();
                });
            });

        });
    });

/*==================Footer AX=========================*/

const axBtn = document.querySelector('#popup_form_btn');

document.addEventListener("DOMContentLoaded", function(){
   checkScroll();
});

window.addEventListener("scroll", function(){
    checkScroll();
});

function checkScroll(){
    var html = document.documentElement;
    var body = document.body;
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;

    var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    scrollTop -= html.clientTop;
    
    var dH = document.documentElement.clientHeight + 100;
    
    if(scrollTop > scrollHeight- dH) {
       axBtn.classList.add('logo_fixed--footer');
    } else {
        axBtn.classList.remove('logo_fixed--footer');
    }
}

// Slider
$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:false,
        slidesToShow: 1    
    });
});