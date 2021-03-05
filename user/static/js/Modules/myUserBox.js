var myUserBoxRequirements = [
  './static/css/myUserBox.css'
]

let myUserBox = (inputBox) => {
  return `
    <div class="myUserBox">
      ${inputBox(className="", id="Name", placeholder="Name...", label="Name")}
      ${inputBox(className="", id="Description", placeholder="Description...", label="Description")}
      <input type="submit" onclick="Save()" id="Save" value="Save">
    </div>
  `
}
