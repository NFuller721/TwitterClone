var usersBoxRequirements = [
  '/static/css/usersBox.css'
]

let usersBox = (Users) => {
  var UsersBoxes = ""
  for (var i = 0; i < Users.length; i++) {
    var User = Users[i]

    UsersBoxes = UsersBoxes.concat(`<a class="userLink ULink" href="/user/${User[0]}">${User[1]}</a>`)
  }
  return `
    <div class="UsersBox">
      <p class="UsersTitle">Users:</p>
      <div class="AllUsers">
      ${UsersBoxes}
      </div>
    </div>
  `
}
