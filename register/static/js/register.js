let Register = () => {
  $.redirect("/register/", {'username': $("#username").val(), 'password': $("#password").val()});
};
$(document).ready(function() {
  Requirements = [
    '/static/js/Modules/inputBox.js',
    './static/js/Modules/registerBox.js',
  ]
  var head = $("head");

  Render(head, Requirements);
  externalRequirements = registerBoxRequirements.concat(inputBoxRequirements);
  Render(head, externalRequirements);

  var body = $("body");


  body.append(
    `
      ${registerBox(inputBox)}
    `
  )
});
