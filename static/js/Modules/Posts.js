var postsRequirements = [
  '/static/css/Posts.css'
]

var posts = (GetPost, Post, body) => {
  GetPost().done((data) => {
    var Posts = '';
    for (var i = 0; i < data.Response.Posts.length; i++) {
      console.log(i)
      var post = data.Response.Posts[i];
      var username = '';
      console.log(i)
      for (var j = 0; j < data.Response.Users.length; ++j) {
        if (data.Response.Users[j][1] == post[2]) {
          username = data.Response.Users[j][0]
        }
      }
      Posts = Posts.concat(Post(postText=post[1], userid=post[2], username=username));
      console.log(i)
      if (i+1 == data.Response.Posts.length) {
        console.log("hello")
        body.append(`
          <div class="Posts">
            ${Posts}
          </div>
        `)
      }
    }
  });
};
