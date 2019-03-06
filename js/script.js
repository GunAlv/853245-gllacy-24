var mapBtn = document.querySelector('.map__button');
var feedback = document.querySelector('.feedback');
var overlay = document.querySelector('.overlay');
var closeFeedback = document.querySelector('.feedback__button-close');
var inputName = document.querySelector('.feedback__input-name');
var inputEmail = document.querySelector('.feedback__input-email');
var feedbackSubmit = document.querySelector('.feedback__button');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
};

feedbackSubmit.addEventListener('click', function(evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
    feedback.classList.remove('feedback--shake');
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add('feedback--shake');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', inputName.value);
    }
  }
});

mapBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
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
  feedback.classList.remove('feedback--shake');
});

overlay.addEventListener('click', function() {
  this.style.display = 'none'
  feedback.classList.remove('feedback--showed');
  feedback.classList.remove('feedback--shake');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    feedback.classList.remove('feedback--shake');
    if (feedback.classList.contains('feedback--showed')) {
      feedback.classList.remove('feedback--showed');
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
});

var mapContainer = document.querySelector('.map__img-container');
var mapImg = document.querySelector('.map__img');

mapContainer.addEventListener('click', function() {
  mapImg.style.display = 'none';
  this.classList.add('map__img-container--no-icon');
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6058763004942!2d30.32335461970398!3d59.93868181970799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1549944852659';
  iframe.classList.add('map__iframe');
  this.appendChild(iframe);
})
