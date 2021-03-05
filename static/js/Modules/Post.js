var postRequirements = [
  '/static/css/Post.css'
]

var post = (postText="", userid="", username="") => {
  return `
    <div class="Post">
      <p>${postText}</p>
      <a href="/user/${userid}" class="userLink">${username}</a>
    </div>
  `
};
