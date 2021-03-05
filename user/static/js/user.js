let GetData = () => {
  return $.post("Api/1234567876543", {'Read': 'True', 'UserID': user});
}

let Follow = (id) => {
  $.post("Api/1234567876543", {'Follow': 'True', 'UserID': id});
  location.reload();
}

let Follow = (id) => {
  $.post("Api/1234567876543", {'Unfollow': 'True', 'UserID': id});
  location.reload();
}

let Following = () => {
  return $.post("Api/1234567876543", {'Following': 'True', 'UserID': user});
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
    Following().done((following) => {
      body.append(
        `
          ${userBox(data, following)}
        `
      )
    });
  });


});
