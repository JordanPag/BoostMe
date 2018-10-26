function getStarted() {
  window.location.replace("signup.html");
}

function learnMore() {
<<<<<<< Updated upstream
  window.location.replace("frontPage.html#learnMore");
=======
  
>>>>>>> Stashed changes
}

function login() {
  window.location.replace("login.html");
}

function continuousShiftBeginning() {
  window.location.replace("frontPage.html#slider-image-1");
  setTimeout(function() { continuousShift() }, 7000);
}
function continuousShift() {
  var url = window.location.href;
  var slide = url[(url.length-1)];
  if(slide==1) {
    window.location.replace("frontPage.html#slider-image-2");
  } else if(slide==2) {
    window.location.replace("frontPage.html#slider-image-3");
  } else if(slide==3) {
    window.location.replace("frontPage.html#slider-image-1");
  }
  setTimeout(function() { continuousShift() }, 7000);
}


window.onload = continuousShiftBeginning;
