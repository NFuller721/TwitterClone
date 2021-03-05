var navbarRequirements = [
  '/static/css/navbar.css'
]
let navbar = (username="", userid="") => {
  if (username != "") {
    return `
      <nav>
        <a href="/">Home</a>
        <a href="/logout">Logout</a>
        <a href="/Following">Following</a>
        <a href="/user/${userid}">${username}</a>
      </nav>
    `;
  } else {
    return `
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    `;
  }
}
