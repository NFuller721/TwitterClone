var postRequirements = [
  '/static/css/Post.css'
]

var post = (postText="") => {
  return `
    <div class="Post">
      <p>${postText}</p>
    </div>
  `
};
