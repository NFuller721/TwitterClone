var userBoxRequirements = [
  './static/css/UserBox.css'
]

let userBox = (data) => {
  return `
    <div class="UserBox">
      <label>Name:</label>
      <p class="NameBox">${data.Response[3]}</p>
      <label>Description:</label>
      <p class="DescriptionBox">${data.Response[4]}</p>
    </div>`;
}
