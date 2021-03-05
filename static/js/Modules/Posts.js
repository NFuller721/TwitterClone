var postsRequirements = [
  '/static/css/Posts.css'
]

var posts = (GetPost, Post, body, following='All') => {
  if (following == 'All') {
    GetPost().done((data) => {

      var Posts = '';
      for (var i = 0; i < data.Response.Posts.length; i++) {
        var post = data.Response.Posts[i];
        var username = '';
        for (var j = 0; j < data.Response.Users.length; ++j) {
          if (data.Response.Users[j][1] == post[2]) {
            username = data.Response.Users[j][0]
          }
        }
        Posts = Posts.concat(Post(postText=post[1], userid=post[2], username=username));
        if (i+1 == data.Response.Posts.length) {
          body.append(`
            <div class="Posts">
              ${Posts}
            </div>
          `)
        }
      }
    });
  } else {
    GetPost().done((data) => {

      var Posts = '';
      for (var i = 0; i < data.Response.Posts.length; i++) {
        var post = data.Response.Posts[i];
        var username = '';
        for (var j = 0; j < data.Response.Users.length; ++j) {
          if (data.Response.Users[j][1] == post[2]) {
            username = data.Response.Users[j][0]
          }
        }
        if (following.includes(post[2].toString())) {
          Posts = Posts.concat(Post(postText=post[1], userid=post[2], username=username));
        }
        if (i+1 == data.Response.Posts.length) {
          body.append(`
            <div class="Posts">
              ${Posts}
            </div>
          `);
        }
      }
    });
  }
};
