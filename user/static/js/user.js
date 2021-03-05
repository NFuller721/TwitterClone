let GetData = () => {
  return $.post("Api/1234567876543", {'Read': 'True', 'UserID': user});
}

$(document).ready(function() {
  Requirements = [
    './static/js/Modules/UserBox.js'
  ]
  var head = $("head");

  Render(head, Requirements)
  Render(head, userBoxRequirements)

  var body = $("body");

  GetData().done((data) => {
    body.append(
      `
        ${userBox(data)}
      `
    )
  });


});
