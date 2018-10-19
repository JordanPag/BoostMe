function checkValidity() {
  var url = new URL(window.location.href);
  var username = url.searchParams.get("username");
  var password = url.searchParams.get("password");
  if(username=="MusicMan42"&&password=="42IsTheAnswer") {
    window.location.replace("homepage.html");
  } else {
    window.location.replace("login.html#");
  }
}

window.onload = checkValidity;
