CB.CloudApp.init('ayyuhziequij', 'e592ce9a-b29b-444c-b5b2-138f4572644f');
var username = CB.CloudUser.current.document.username;

function changeUsername() {
  console.log(username);
  $("#username").html(username);
}
window.onload = changeUsername;
CB.CloudUser.getCurrentUser({
  success: function(user) {
    console.log(user);
  },
  error: function(error) {
   console.log(error);
  }
});
