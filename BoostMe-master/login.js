CB.CloudApp.init('ayyuhziequij', 'e592ce9a-b29b-444c-b5b2-138f4572644f');

function validate() {
  var username = $("#username").val();
  var password = $("#password").val();
  var user = new CB.CloudUser();
  user.set('username', username);
  user.set('password', password);
  user.logIn({
    success: function(user) {
      //Login successfull
      window.location.replace("homepage.html");
    },
    error: function(error) {
      $(".errorMessage").html("Incorrect username or password");
    }
  });
}
