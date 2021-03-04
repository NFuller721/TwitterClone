var registerBoxRequirements = [
  './static/css/registerBox.css'
]

var registerBox = (inputBox) => {
  return `
  <div class='registerBox'>
    ${inputBox(className="", id="username", placeholder="Username...", label="Username")}
    ${inputBox(className="", id="password", placeholder="Password...", label="Password")}
    <input type="submit" id="register" onclick="Register()" value="Sign-up">
  </div>
  `;
}
