var loginBoxRequirements = [
  './static/css/loginBox.css'
]

var loginBox = (inputBox) => {
  return `
  <div class='loginBox'>
    ${inputBox(className="", id="username", placeholder="Username...", label="Username")}
    ${inputBox(className="", id="password", placeholder="Password...", label="Password")}
    <input type="submit" id="login" onclick="Login()" value="Log-in">
  </div>
  `;
}
