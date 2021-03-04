var postBoxRequirements = [
  '/static/css/postBox.css'
]

var postBox = (inputBox) => {
  return `
  <div class='postBox'>
    ${inputBox(className="", id="postText", placeholder="post...")}
    <input type="submit" id="post" onclick="NewPost()" value="Send it to the internet!">
  </div>
  `;
}
