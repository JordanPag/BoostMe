CB.CloudApp.init('ayyuhziequij', 'e592ce9a-b29b-444c-b5b2-138f4572644f');

function checkValidity() {
  console.log("logging in");
  var username = $("#username").val();
  var password = $("#password").val();
  var user = new CB.CloudUser();
  user.set('username', username);
  user.set('password', password);
  user.logIn({
    success: function(user) {
      window.location.replace("homepage.html");
    },
    error: function(error) {
      console.log("incorrect login");
      $(".errorMessage").html(error);
    }
  });
}
