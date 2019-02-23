var mapBtn = document.querySelector('.map__button');
var feedback = document.querySelector('.feedback');
var overlay = document.querySelector('.overlay');
var closeFeedback = document.querySelector('.feedback__button-close');
var inputName = document.querySelector('.feedback__input-name');
var inputEmail = document.querySelector('.feedback__input-email');
var feedbackSubmit = document.querySelector('.feedback__button');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackSubmit.addEventListener('submit', function(evt) {
  if (!inputName || !inputEmail) {
    /*Вот это не работает*/
    evt.preventDefault();
    feedback.classList.add('feedback--shake');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", inputEmail.value);
    }
  }
});

mapBtn.addEventListener('click', function() {
  feedback.classList.add('feedback--showed');
  overlay.style.display = 'block';
  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

closeFeedback.addEventListener('click', function() {
  feedback.classList.remove('feedback--showed');
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function() {
  this.style.display = 'none'
  feedback.classList.remove('feedback--showed');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("feedback--showed")) {
      feedback.classList.remove("feedback--showed");
      overlay.style.display = 'none';
    }
  }
});


var slider1 = document.querySelector('.slider__input--first');
var slider2 = document.querySelector('.slider__input--second');
var slider3 = document.querySelector('.slider__input--third');
var slidersItem = document.querySelectorAll('.slider__item');
var sliderSection = document.querySelector('.slider');
var body = document.querySelector('.body');


slider2.addEventListener('click', function() {
  slidersItem[0].classList.remove('slider__item--active');
  slidersItem[2].classList.remove('slider__item--active');
  slidersItem[1].classList.add('slider__item--active');
  body.classList.remove('body--first-slide');
  body.classList.remove('body--third-slide');
  body.classList.add('body--second-slide');
  sliderSection.classList.remove('slider--first');
  sliderSection.classList.remove('slider--third');
  sliderSection.classList.add('slider--second');
});

slider1.addEventListener('click', function() {
  slidersItem[1].classList.remove('slider__item--active');
  slidersItem[2].classList.remove('slider__item--active');
  slidersItem[0].classList.add('slider__item--active');
  body.classList.remove('body--second-slide');
  body.classList.remove('body--third-slide');
  body.classList.add('body--first-slide');
  sliderSection.classList.remove('slider--second');
  sliderSection.classList.remove('slider--third');
  sliderSection.classList.add('slider--first');
});

slider3.addEventListener('click', function() {
  slidersItem[0].classList.remove('slider__item--active');
  slidersItem[1].classList.remove('slider__item--active');
  slidersItem[2].classList.add('slider__item--active');
  body.classList.remove('body--second-slide');
  body.classList.remove('body--first-slide');
  body.classList.add('body--third-slide');
  sliderSection.classList.remove('slider--second');
  sliderSection.classList.remove('slider--first');
  sliderSection.classList.add('slider--third');
})

