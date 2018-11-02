CB.CloudApp.init('ayyuhziequij', 'e592ce9a-b29b-444c-b5b2-138f4572644f');

function signUp() {
  //Add info to database and redirect to homepage
  var user = new CB.CloudUser();
  var username = $("#username").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var genre = $("#genre").val();
  var musiclink = $("#musiclink").val();
  user.set('username', username);
  user.set('email', email);
  user.set('password', password);
  user.set('musicGenre', genre);
  user.set('musicLink', musiclink);
  user.signUp({
    success: function(user) {
      //Registration successfull
      user.logIn({
        success: function(user) {
          //Login successfull
          window.location.replace("homepage.html");
        },
        error: function(error) {
          console.log(error);
        }
      });
    },
    error: function(error) {
      //Error in user registration.
    }
  });
}
