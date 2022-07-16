const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const bttn = accordion.querySelector(".accordion__button");
  const panel = accordion.querySelector(".accordion__panel");
  const activeClassBtn = "accordion__button-active";
  const activeClassPanel = "accordion__panel-active";

  bttn.addEventListener("click", (event) => {
    event.preventDefault();

    const active__bttn = document.querySelectorAll(
      ".accordion .accordion__button-active"
    );
    active__bttn.forEach((el) =>
      el !== bttn ? el.classList.remove(activeClassBtn) : null
    );
    bttn.classList.toggle(activeClassBtn);

    const active__panel = document.querySelectorAll(
      ".accordion .accordion__panel-active"
    );
    active__panel.forEach((el) =>
      el !== panel ? el.classList.remove(activeClassPanel) : null
    );
    panel.classList.toggle(activeClassPanel);

    panel.style.setProperty("--height", `${panel.scrollHeight}px`);
  });
});
// =================================clock======================================
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
// ==============================================================================
$(document).ready(function () {
  //Скрыть PopUp при загрузке страницы    
  PopUpHide();
});
//Функция отображения PopUp
function PopUpShow() {
  $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide() {
  $("#popup1").hide();
}
// ================================================================================
const showDialog = () => {
  document.getElementById('dialog').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});