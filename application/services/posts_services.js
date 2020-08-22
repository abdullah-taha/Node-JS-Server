const axios = require('axios');

/*
function to get all posts with all comments
*/
async function get_posts() {
  try {
    // get all the posts
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    for (var i = 0; i < posts.length; i++) {
      // for every post, gets it's id and get the corresponding comments
      const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts/' + String(posts[i].id) + '/comments');
      const comments = response2.data;
      posts[i]["comments"] = comments;
    }
    return posts;
  }
  catch (error) {
    console.log("error");
    return error;
  }
}

/*
function to create a post
parmeters:
  params = a dictionary holding the post informations (title, body, userId)
*/
async function create_post(params) {
  try {
    let response = await axios.post('https://jsonplaceholder.typicode.com/posts', params);
    return response;
  }
  catch (error) {
    console.log("error");
    return error;
  }

}


//exports functions
exports.get_posts = get_posts;
exports.create_post = create_post;