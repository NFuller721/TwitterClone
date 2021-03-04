var navbarRequirements = [
  '/static/css/navbar.css'
]
let navbar = (username="") => {
  if (username != "") {
    return `
      <nav>
        <a href="/">Home</a>
        <a href="/logout">Logout</a>
        <a href="/user/">${username}</a>
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
