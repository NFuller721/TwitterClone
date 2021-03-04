$(document).ready(function() {
  Requirements = [
    './static/js/Modules/myUserBox.js',
    '/static/js/Modules/inputBox.js'
  ]
  var head = $("head");

  Render(head, Requirements)
  Render(head, myUserBoxRequirements.concat(inputBoxRequirements))

  var body = $("body");

  body.append(
    `
      ${myUserBox(inputBox)}
    `
  )


});
