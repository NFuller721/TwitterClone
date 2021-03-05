let GetPost = () => {
  return $.post("Api/Read", {});
}

let Following = () => {
  return $.post("/user/Api/1234567876543", {'Following': 'True', 'UserID': 'All'});
}

$(document).ready(function() {
  Requirements = [
    '/static/js/Modules/inputBox.js',
    '/static/js/Modules/postBox.js',
    '/static/js/Modules/Post.js',
    '/static/js/Modules/Posts.js',
  ]
  var head = $("head");

  Render(head, Requirements);
  externalRequirements = postBoxRequirements.concat(
    inputBoxRequirements
  ).concat(
    postBoxRequirements
  ).concat(
    postsRequirements
  ).concat(
    postRequirements
  );
  Render(head, externalRequirements);

  var body = $("body");
  Following().done((data) => {
    following = data.Response
    posts(GetPost, post, body, following)
  });
});
