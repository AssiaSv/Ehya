$(document).ready(function(){
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  // console.log("клик по кнопке меню");
  document.querySelector(".navbar-right").classList.toggle("navbar-right--visible");
  $("body").toggleClass("body__no-scroll");
});

// модальное окно
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__overlay");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible")
  modalDialog.addClass("modal__dialog--visible")
  $("body").addClass("modal-open");
  $("body").addClass("body__no-scroll");
}
function closeModal(event) {
  event.preventDefault()
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible")
  modalDialog.removeClass("modal__dialog--visible")
  $("body").removeClass("modal-open");
  $("body").removeClass("body__no-scroll");
}
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("body__no-scroll");
  }
  });

  
  // обработка форм
  $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: "Введите не менее 2 символов",
      },
      email: {
        required: "Введите вашу почту",
        email: "Формат почты: name@domain.com"
      },
      phone: {
        required: "Введите ваш номер",
        phone: "Phone number format: +7-(999)-999-99-99",
        minlength: "Введите не менее 11 символов",
        },
      },
    });
  });
  $(".phone").mask("+7(999) 999-99-99");

  //Слайдер 1

  var categoriesSlider = new Swiper(".slider-categories__container", {
    slidesPerColumnFill: 'row',
    loop: false,
    navigation: {
      nextEl: ".slide-button--next",
      prevEl: ".slide-button--prev"
    },  
  
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    // slidesPerView: 2,
    // grid: {
    //   rows: 3,
    // },
    
    // breakpoints: {
    //   320: {slidesPerView: 2, slidesPerColumn: 2},
    //   320: {slidesPerView: 2, grid: { rows: 2}},      
    //   767: {slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0},
    //   1200: {slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27}
    // },
    breakpoints: {
      320: {slidesPerView: 2, slidesPerColumn: 2},
      560: {slidesPerView: 2, slidesPerColumn: 2},      
      767: {slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0},
      1200: {slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27}
    },
});

//Слайдер 2
var reviewsSlider = new Swiper(".slider-unedited__container", {
  
  loop: false,
  navigation: {
    nextEl: ".unedited__button--next",
    prevEl: ".unedited__button--prev",
  },
  slidesPerView: 5,
    spaceBetween: 30,
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      200: {slidesPerView: 1},
      520: {slidesPerView: 2, spaceBetween: 25},
      767: {slidesPerView: 3},
      992: {slidesPerView: 4},
      1200: {slidesPerView: 5}
    },
});

//красное сердце
var menuButton = $(".card__like");
  menuButton.on("click", function () {  
    $(this).toggleClass("card__like--active");
}); 

// видео
var player;
$('.history__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-1', {
    height: '380',
    width: '100%',
    videoId: 'Q9wWL8TeIos',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }
// видео-1
var player;
$('.history__button--first').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-2', {
    height: '200',
    width: '100%',
    videoId: 'Q9wWL8TeIos',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }
// видео-2
var player;
$('.history__button--two').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-3', {
    height: '200',
    width: '100%',
    videoId: 'Q9wWL8TeIos',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }
// видео-3
var player;
$('.history__button--three').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-4', {
    height: '200',
    width: '100%',
    videoId: 'Q9wWL8TeIos',
    events: {
      'onReady': videoPlay,
    }
  });
 })

 function videoPlay(event) {
   event.target.playVideo();
 }

 //якорь 
      var $page = $('html, body');
        $('a[href="#recomendation"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#booking"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#bloging"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
      });
//   // слайдер с неизданными книгами
//   var bookSlider = new Swiper('.book-slider', {
//   // Optional parameters
//     loop: true,
    

//   // Navigation arrows
//   navigation: {
//     nextEl: '.book__button--next',
//     prevEl: '.book__button--prev',
//   },
  
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
  
// });



// var count=0;
// btN.onclick=function(){
//   count++;
//   if(count>1)
//   document.getElementById('btN').style.display='none';
// };
// var count=0;
// btn.onclick=function(){
//   count++;
//   if(count>2)
//   document.getElementById('btN').style.display='flex';
// };

//кнопка домой
  var btn = $(".home");    
        $(window).scroll(function(e) {  
          if ($(window).scrollTop() > 700) {  
          btn.addClass("arrow-up--show");
        } else {
          btn.removeClass("arrow-up--show");
        }
        });
          $(".home").click(function(e) {
            e.preventDefault();
          $("body,html").animate({scrollTop:0},700);
          });

});