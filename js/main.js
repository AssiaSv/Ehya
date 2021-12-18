$(document).ready(function(){
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  // console.log("клик по кнопке меню");
  document.querySelector(".navbar-right").classList.toggle("navbar-right--visible");
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
}
function closeModal(event) {
  event.preventDefault()
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible")
  modalDialog.removeClass("modal__dialog--visible")
  $("body").removeClass("modal-open");
}
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  });
  // обработка форм
  $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least 2 letters long",
      },
      email: {
        required: "Please specify your emai",
        email: "Email address format: name@domain.com"
      },
      phone: {
        required: "Please specify your phone number",
        phone: "Phone number format: +7-(999)-999-99-99",
        minlength: "Please enter at least 11 characters.",
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
    
    breakpoints: {
      // 320: {slidesPerView: 2, slidesPerColumn: 2},
      320: {slidesPerView: 2, grid: { rows: 2}},      
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



});