var myUserBoxRequirements = [
  './static/css/myUserBox.css'
]

let myUserBox = (inputBox) => {
  return `
    <div class="myUserBox">
      ${inputBox(className="", id="Username", placeholder="Username...", label="Username")}
      ${inputBox(className="", id="Password", placeholder="Password...", label="Password")}
      <input type="submit" id="Save" onclick="Save()" value="Save">
    </div>
  `
}
