let NewPost = () => {
  $.redirect("/", {'NewPost': $("#postText").val()});
};

let GetPost = () => {
  return $.post("Api/Read", {});
}

$(document).ready(function() {
  GetPost().done((data) => {
    console.log(data);
  });
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


  posts(GetPost, post, body)

  body.append(
    `
      ${postBox(inputBox)}
    `
  )
});
