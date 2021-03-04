var postsRequirements = [
  '/static/css/Posts.css'
]

var posts = (GetPost, Post, body) => {
  GetPost().done((data) => {
    var Posts = '';
    for (var i = 0; i < data.Response.length; i++) {
      var post = data.Response[i];
      Posts = Posts.concat(Post(postText=post[1]));
      if (i+1 == data.Response.length) {
        body.append(`
          <div class="Posts">
            ${Posts}
          </div>
        `)
      }
    }
  });
};
