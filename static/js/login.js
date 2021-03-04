let Login = () => {
  $.redirect("/login/", {'username': $("#username").val(), 'password': $("#password").val()});
};
$(document).ready(function() {
  Requirements = [
    './static/js/Modules/loginBox.js',
    '/static/js/Modules/inputBox.js',
  ]
  var head = $("head");

  Render(head, Requirements);
  externalRequirements = loginBoxRequirements.concat(inputBoxRequirements);
  Render(head, externalRequirements);

  var body = $("body");


  body.append(
    `
      ${loginBox(inputBox)}
    `
  )
});
