function signUp() {
  //Add info to database and redirect to homepage
  var user = new CB.CloudUser();
  user.set('username', username);
  user.set('password', password);
  user.set('musicGenre', genre);
  user.signUp({
    success: function(user) {
      //Registration successfull
    },
    error: function(error) {
      //Error in user registration.
    }
  });
}
