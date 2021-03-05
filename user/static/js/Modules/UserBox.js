var userBoxRequirements = [
  './static/css/UserBox.css'
]

let userBox = (data, following) => {
  return `
    <div class="UserBox">
      ${following.Response == "No" ? `<button class="Follow" onclick="Follow('${data.Response[0]}')">Follow</button>` : `<button class="Unfollow" onclick="Unfollow('${data.Response[0]}')">Unfollow</button>`}
      <label>Name:</label>
      <p class="NameBox">${data.Response[3]}</p>
      <label>Description:</label>
      <p class="DescriptionBox">${data.Response[4]}</p>
    </div>`;
}
