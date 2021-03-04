$(document).ready(function() {
  Requirements = [
    '/static/js/Modules/navbar.js',
    '/static/css/main.css',
  ]
  var head = $("head");

  Render(head, Requirements)
  Render(head, navbarRequirements)

  var body = $("body");

  body.append(
    `
      ${(typeof(username) !== 'undefined') ? navbar(username=username) : navbar()}
    `
  )


});
