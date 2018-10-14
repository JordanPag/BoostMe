function getStarted() {
  window.location.replace("signup.html");
}

function learnMore() {
  window.location.replace("learnMore.html");
}

function login() {
  window.location.replace("login.html");
}

function continuousShift1() {
  window.location.replace("frontPage.html#slider-image-1");
  setTimeout(function() { continuousShift2() }, 7000);
}
function continuousShift2() {
  window.location.replace("frontPage.html#slider-image-2");
  setTimeout(function() { continuousShift3() }, 7000);
}
function continuousShift3() {
  window.location.replace("frontPage.html#slider-image-3");
  setTimeout(function() { continuousShift1() }, 7000);
}

window.onload = continuousShift1;
