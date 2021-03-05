let NewPost = () => {
  $.redirect("/", {'NewPost': $("#postText").val()});
};

let Following = () => {
  return $.post("/user/Api/1234567876543", {'Following': 'True', 'UserID': 'All'});
}

let GetPost = () => {
  return $.post("Api/Read", {});
}

let GetUsers = () => {
  return $.post("/user/Api/1234567876543", {'ReadAll': 'True'});
}

$(document).ready(function() {
  Requirements = [
    '/static/js/Modules/inputBox.js',
    '/static/js/Modules/postBox.js',
    '/static/js/Modules/Post.js',
    '/static/js/Modules/Posts.js',
    '/static/js/Modules/usersBox.js',
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
  ).concat(
    usersBoxRequirements
  );
  Render(head, externalRequirements);

  var body = $("body");

  Following().done((following) => {
    posts(GetPost, post, body, following.Response)
  });
  body.append(
    `
    ${postBox(inputBox)}
    `
  )
  setTimeout(() => {
    GetUsers().done((Users) => {
      body.append(
        `
          ${usersBox(Users.Response)}
        `
      )
    });
  }, 100)
});
