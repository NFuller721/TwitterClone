var userBoxRequirements = [
  './static/css/UserBox.css'
]

let userBox = (data, following="") => {
  if (following == "") {
    return `
    <div class="UserBox">
      <a class="Button" href="/user/editUser">edit</a>
      <label>Name:</label>
      <p class="NameBox">${data.Response[3]}</p>
      <label>Description:</label>
      <p class="DescriptionBox">${data.Response[4]}</p>
    </div>`;
  } else {
    return `
    <div class="UserBox">
      ${following.Response == "No" ? `<button class="Button" onclick="Follow('${data.Response[0]}')">Follow</button>` : `<button class="Button" onclick="Unfollow('${data.Response[0]}')">Unfollow</button>`}
      <label>Name:</label>
      <p class="NameBox">${data.Response[3]}</p>
      <label>Description:</label>
      <p class="DescriptionBox">${data.Response[4]}</p>
    </div>`;
  }
}
