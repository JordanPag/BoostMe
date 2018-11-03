CB.CloudApp.init('ayyuhziequij', 'e592ce9a-b29b-444c-b5b2-138f4572644f');
var username = CB.CloudUser.current.document.username;

function personalizeWebsite() {
  console.log(username);
  $("#username").html(username);
  var query = new CB.CloudQuery("User");
  query.equalTo('group', 1);
  query.find({
    success: function(list){
      console.log(list);
    },
    error: function(err){
      console.log(err);
    }
  })
}
window.onload = personalizeWebsite;

CB.CloudUser.getCurrentUser({
  success: function(user) {
    console.log(user);
  },
  error: function(error) {
   console.log(error);
   window.location.replace("login.html");
  }
});
